# Chat
Chat con IA

## Descripción
Aplicación de chat front-end minimalista y responsiva construida con HTML, CSS nativo y JavaScript. Incluye un área de conversación, campo de entrada y botón de envío. Maneja el envío de mensajes a un backend via fetch y renderiza las respuestas en tiempo real.

## Características
- Interfaz minimalista y responsiva
- Área de conversación tipo chat
- Campo de entrada y botón de envío
- Estilos claros y accesibles usando CSS nativo
- JavaScript con buenas prácticas: separación de lógica, manejo de errores y sanitización básica
- Auto-scroll en la conversación
- Deshabilitación del botón durante el envío

## Tecnologías
- HTML5
- CSS3 (nativo, sin frameworks)
- JavaScript (ES6+, fetch API)

## Archivos
- `index.html`: Estructura principal de la aplicación
- `styles.css`: Estilos responsivos y accesibles
- `script.js`: Lógica del chat, envío de mensajes y renderizado

## Instalación y Ejecución
1. Clona el repositorio.
2. Abre `index.html` en un navegador web.
3. Asegúrate de que el backend esté corriendo en `http://localhost:3000/chat` (endpoint POST con payload `{message: string}` y respuesta `{response: string}`).

Para un servidor local simple (opcional):
```bash
python -m http.server 8000
```
Luego abre `http://localhost:8000/index.html`.

## Uso
- Escribe un mensaje en el campo de entrada.
- Presiona Enter o haz clic en "Enviar".
- El mensaje se envía al backend y la respuesta se muestra en el chat.

## Notas
- Requiere un backend compatible para funcionar completamente.
- La sanitización básica previene inyección de HTML básica.
