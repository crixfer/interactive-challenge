//RATING SELECTOR

// Seleccionar todos los elementos necesarios
const numbers = document.querySelectorAll(".number");
const submitButton = document.querySelector(".button");
const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const selectedRating = document.getElementById("selected-rating");

// Variable para almacenar la calificación seleccionada
let rating = null;

// Añadir un event listener a cada número para seleccionar la calificación
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    // Eliminar la clase 'selected' de todos los números
    numbers.forEach((num) => num.classList.remove("selected"));

    // Añadir la clase 'selected' al número clickeado
    number.classList.add("selected");

    // Guardar el valor de la calificación seleccionada
    rating = number.textContent;
  });
});

// Función para manejar el envío del formulario
function submitRating() {
  // Comprobar si se ha seleccionado una calificación
  if (rating) {
    // Almacenar la calificación en localStorage
    localStorage.setItem("rating", rating);

    // Redirigir al segundo HTML
    window.location.href = "thanks.html";
  } else {
    alert("Please, select a rating before submitting.");
  }
}

// Detectar si estamos en 'thanks.html'
if (document.querySelector(".thanks-container")) {
  const selectedRating = localStorage.getItem("rating");
  if (selectedRating) {
    document.getElementById("selected-rating").textContent = selectedRating;
  } else {
    window.location.href = "index.html";
  }
}
