const toggleBtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

toggleBtn.addEventListener("click", function() {
  this.classList.toggle("click");
  nav.classList.toggle("open");
});

// Texto que deseas mostrar
const text = "Soy Alleen";

// Elemento donde se mostrará el texto escrito
const typedText = document.getElementById("typed-text");

// Función para mostrar el texto de forma gradual
function typeWriter(text, i, callback) {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i, callback), 100); // Ajusta la velocidad de escritura modificando el valor en milliseconds (ej: 50 para una escritura más rápida)
  } else {
    setTimeout(() => {
      // Limpiar el texto y reiniciar la escritura
      typedText.textContent = "";
      typeWriter(text, 0, callback);
    }, 2000); // Tiempo de espera en milisegundos antes de reiniciar la escritura (ej: 2000 para una pausa de 2 segundos)
  }
}

// Llama a la función typeWriter para comenzar la animación de escritura
typeWriter(text, 0, () => {
});


// Obtén el elemento del contenedor de "Hablemos"
const hablemosContainer = document.querySelector("#hablemos .container-hr");

// Función para mostrar el contenedor con efecto
function showHablemosContainer() {
    hablemosContainer.classList.add("show");
}

// Muestra el contenedor después de un retraso
setTimeout(showHablemosContainer, 1000); // Ajusta el tiempo de retraso en milisegundos (ej: 1000 para un retraso de 1 segundo)




