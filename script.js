/* =========================
   MENÚ RESPONSIVE
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* Cerrar menú al seleccionar una opción */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================
   CARRUSEL
========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlide = 0;


/* Mostrar slide */

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

}


/* Siguiente */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* Anterior */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}


nextBtn.addEventListener("click", () => {

    nextSlide();

    resetTimer();

});


prevBtn.addEventListener("click", () => {

    previousSlide();

    resetTimer();

});


/* Click en indicadores */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        resetTimer();

    });

});


/* Carrusel automático */

let sliderTimer = setInterval(nextSlide, 5000);


function resetTimer() {

    clearInterval(sliderTimer);

    sliderTimer = setInterval(nextSlide, 5000);

}


/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   FORMULARIO
========================= */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "¡Gracias por contactarnos! " +
        "Tu mensaje fue enviado correctamente."
    );

    form.reset();

});


/* =========================
   EFECTO DE SCROLL HEADER
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.10)";

    } else {

        header.style.boxShadow =
            "0 2px 20px rgba(0,0,0,.05)";

    }

});