// script.js - Lógica del chat con buenas prácticas

// Elementos del DOM
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Función para sanitizar entrada básica (escapar HTML)
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Función para renderizar un mensaje en el chat
function renderMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = content; // Usar innerHTML ya que sanitizamos antes
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll al final
}

// Función para enviar mensaje al backend
async function sendMessage(message) {
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        });

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }

        const data = await response.json();
        renderMessage(sanitizeInput(data.response), 'bot');
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        renderMessage('Lo siento, hubo un error al procesar tu mensaje. Inténtalo de nuevo.', 'bot');
    }
}

// Función principal para manejar el envío
function handleSend() {
    const message = messageInput.value.trim();
    if (message === '') return;

    // Renderizar mensaje del usuario
    renderMessage(sanitizeInput(message), 'user');

    // Limpiar input
    messageInput.value = '';

    // Enviar al backend
    sendMessage(message);
}

// Event listeners
sendButton.addEventListener('click', handleSend);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});

// Deshabilitar botón mientras se envía (opcional, pero buena práctica)
function setSendingState(sending) {
    sendButton.disabled = sending;
    sendButton.textContent = sending ? 'Enviando...' : 'Enviar';
}

// Modificar sendMessage para usar estado
async function sendMessage(message) {
    setSendingState(true);
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        });

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }

        const data = await response.json();
        renderMessage(sanitizeInput(data.response), 'bot');
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        renderMessage('Lo siento, hubo un error al procesar tu mensaje. Inténtalo de nuevo.', 'bot');
    } finally {
        setSendingState(false);
    }
}