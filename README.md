
QuizMaster es un sencillo y adictivo juego de preguntas y respuestas desarrollado en HTML JS CSS para ser renderizado y ejecutado en el navegador web. Pon a prueba tus conocimientos generales a través de múltiples preguntas con opciones de respuesta, obtén feedback instantáneo y descubre tu puntuación final al terminar el quiz. Ideal para practicar HTML CSS y JS o para un rápido desafío mental.

# WebQuiz: Tu Desafío Interactivo en el Navegador

## 🚀 Descripción del Proyecto

**WebQuiz** es una aplicación de juego de preguntas y respuestas (quiz) diseñada para el navegador web. Desarrollada con las tecnologías fundamentales de la web (**HTML** para la estructura, **CSS** para el estilo y **JavaScript** para la interactividad), este proyecto ofrece una experiencia de usuario atractiva y dinámica. Los usuarios pueden responder a una serie de preguntas, ver sus puntuaciones y obtener feedback sobre sus respuestas.

## ✨ Características

* **Interfaz Amigable:** Diseño limpio y responsive para una experiencia de usuario agradable.
* **Preguntas Interactivas:** Selecciona tus respuestas con facilidad usando botones de opción.
* **Puntuación Automática:** Calcula y muestra tu puntuación final al enviar el quiz.
* **Feedback Visual:** Resalta las respuestas correctas e incorrectas al finalizar el juego.
* **Fácil de Implementar:** Solo necesitas un navegador web para ejecutar la aplicación.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura del contenido.
* **CSS3:** Estilos visuales y diseño.
* **JavaScript:** Lógica del quiz, interactividad y cálculo de puntuación.

## 🚀 Cómo Ejecutar el Proyecto

Para usar WebQuiz, simplemente sigue estos pasos:

1.  **Clona este repositorio** (o descarga los archivos `index.html`, `style.css`, `script.js` en una misma carpeta).
    
    git clone https://github.com/santiagourdaneta/Juego-de-Preguntas-y-Respuestas-Quiz-App-en-HTML-JS-CSS/
    cd Juego-de-Preguntas-y-Respuestas-Quiz-App-en-HTML-JS-CSS/
  

2.  **Abre el archivo `index.html`** en tu navegador web preferido (Chrome, Firefox, Edge, etc.). Puedes hacerlo de las siguientes maneras:
    * Navega a la carpeta del proyecto y haz doble clic en `index.html`.
    * Arrastra y suelta el archivo `index.html` directamente en la ventana de tu navegador.

3.  ¡Empieza a responder las preguntas y haz clic en "Enviar Respuestas" para ver tus resultados!

## 💡 Personalización

Puedes personalizar las preguntas, opciones y respuestas correctas editando el array `quizData` dentro del archivo `script.js`.


const quizData = [
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Arequipa", "Cusco", "Lima", "Trujillo"],
        correct: 2 // Índice de la respuesta correcta (Lima)
    },
    // Añade o modifica más preguntas aquí
];

También puedes modificar los estilos en style.css para cambiar la apariencia del quiz.




