// Obtenemos los elementos del DOM que vamos a manipular
const nav = document.querySelector(".nav");
const fotoPrincipal = document.querySelector(".foto-principal");
const ultimosResultados = document.querySelector(".ultimos-resultados");
const jugadoresDestacados = document.querySelector(".jugadores-destacados");
const fotosDeLaFecha = document.querySelector(".fotos-de-la-fecha");

// Constantes
const ALTURA_ANIMACION = 100;

// Función genérica para agregar un efecto de animación a elementos basada en su posición
function agregarEfectoScroll(elemento, claseAnimacion, alturaAdicional = 0) {
    let posicionScroll = window.scrollY;
    if (posicionScroll > elemento.offsetHeight + alturaAdicional) {
        elemento.classList.add(claseAnimacion);
    } else {
        elemento.classList.remove(claseAnimacion);
    }
}

// Función para agregar un efecto de transición al encabezado cuando se hace scroll
function efectoEncabezado() {
    agregarEfectoScroll(nav, "nav-animar");
}

// Función para agregar un efecto de animación a los últimos resultados cuando se hace scroll
function efectoResultados() {
    agregarEfectoScroll(ultimosResultados, "animar", fotoPrincipal.offsetHeight / 2);
}

// Función para agregar un efecto de animación a los jugadores destacados cuando se hace scroll
function efectoJugadores() {
    agregarEfectoScroll(jugadoresDestacados, "animar", ultimosResultados.offsetHeight);
}

// Función para agregar un efecto de animación a las fotos de la fecha cuando se hace scroll
function efectoFotos() {
    agregarEfectoScroll(fotosDeLaFecha, "animar", ultimosResultados.offsetHeight + jugadoresDestacados.offsetHeight);
}

// Función para manejar eventos de scroll de manera eficiente
function handleScroll() {
    efectoEncabezado();
    efectoResultados();
    efectoJugadores();
    efectoFotos();
}

window.addEventListener("scroll", function () {
    requestAnimationFrame(handleScroll);
});
