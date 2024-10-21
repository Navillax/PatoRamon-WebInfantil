/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//BOTÓN DE MÚSICA, CANCIÓN DEL PATO.
function toggleMusic() {
  let music = document.getElementById("music");
  if (music.paused) {
    music.play();

    myAudio.pause();
  } else {
    music.pause();

    myAudio.play();
  }
}

// Botón y música ambiente
function playAudio() {
  setTimeout(function () {
    document.getElementById("myAudio").play();
  }, 5000);
}
window.onload = function () {
  let myAudio = document.getElementById("myAudio");
  let playPauseButton = document.getElementById("playPauseButton");

  playPauseButton.onclick = function () {
    if (myAudio.paused) {
      myAudio.play();
      music.pause();
    } else {
      myAudio.pause();
      music.pause();
    }
  };
};

//Scroll del Nav
const navbar = document.getElementById("navbarp");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-dark", "bg-black");
    navbar.classList.remove("navbar-light", "bg-white");
  } else {
    navbar.classList.add("navbar-light", "bg-white");
    navbar.classList.remove("navbar-dark", "bg-black");
  }
});

//Botón scroll bot to top
//Coger botón de subir
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//CARGA DE LA PAGINA
// Oculto el contenido al cargar la página para que solo se vea el logo
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("content").classList.add("hidden");
});

// Muestro el contenido una vez que la página ha terminado de cargarse
window.addEventListener("load", function () {
  document.getElementById("loading-logo").style.display = "none"; // Oculta el logo de carga
  document.getElementById("content").classList.remove("hidden"); // Muestra el contenido
});

//Modal en botón jugar
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
