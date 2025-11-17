# 🌐 WebQuiz: Aplicación de Preguntas y Respuestas (HTML, CSS, JavaScript Vanilla)

**WebQuiz** es una aplicación de prueba de conocimientos ("quiz app") completamente funcional, desarrollada utilizando el trío fundamental del desarrollo web: **HTML5** para la estructura, **CSS3** para el diseño interactivo y **JavaScript (Vanilla)** para toda la lógica.

Este proyecto es un excelente ejemplo de cómo construir una **Single Page Application (SPA)** ligera y dinámica, demostrando el manejo del **DOM (Document Object Model)**, la gestión del estado del juego y la manipulación de eventos sin depender de frameworks o librerías externas.

## 🛠️ Stack Tecnológico

| Componente | Tecnología | Propósito Clave |
| :--- | :--- | :--- |
| **Estructura** | **HTML5** | Definición semántica de la interfaz del quiz. |
| **Estilo y Diseño** | **CSS3** | Estilización visual, diseño *responsive* y manejo de la presentación del feedback. |
| **Lógica de Juego** | **JavaScript (Vanilla)** | Control del flujo de preguntas, captura de respuestas, cálculo de puntuación y manipulación del DOM para mostrar resultados. |

## ✨ Características Frontend

* **Manipulación Dinámica del DOM:** JavaScript inyecta las preguntas y opciones, y actualiza la interfaz en tiempo real sin recargar la página.
* **Separación de Intereses:** El contenido (HTML), la presentación (CSS) y el comportamiento (JavaScript) están claramente separados, facilitando el mantenimiento y la extensibilidad.
* **Modelo de Datos de Preguntas:** Las preguntas se cargan desde un *array* de objetos en JavaScript, demostrando un manejo estructurado de los datos del quiz.
* **Feedback Visual Instantáneo:** Tras enviar las respuestas, se proporciona una retroalimentación visual clara sobre aciertos y errores.

## 🚀 Cómo Ejecutar el Proyecto

Este proyecto no requiere servidor ni instalación de dependencias. Solo necesitas un navegador web moderno.

### Pasos

1.  **Clonar o Descargar el Repositorio:**
    ```bash
    git clone [https://github.com/santiagourdaneta/Juego-de-Preguntas-y-Respuestas-Quiz-App-en-HTML-JS-CSS.git](https://github.com/santiagourdaneta/Juego-de-Preguntas-y-Respuestas-Quiz-App-en-HTML-JS-CSS.git)
    cd Juego-de-Preguntas-y-Respuestas-Quiz-App-en-HTML-JS-CSS/
    ```

2.  **Abrir en el Navegador:**
    Simplemente haz doble clic en el archivo `index.html`. El navegador cargará el código y JavaScript se encargará de inicializar el quiz.

## 💡 Extensibilidad y Personalización

Para modificar el contenido del quiz, solo tienes que editar el array `quizData` dentro del archivo `script.js`. Cada objeto dentro del array debe seguir la siguiente estructura:

```javascript
const quizData = [
  {
    question: "...",
    options: ["...", "...", "..."],
    correct: 2 // Índice de la respuesta correcta (basado en 0)
  },
  // Más preguntas...
];
