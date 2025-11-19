import { Cazador } from "./classes/indexJugadores.js";
import {
  Goblin,
  Bandido,
  Dragon,
  Lobo,
  Jefe,
} from "./classes/indexEnemigos.js";
import {
  avatarCazador,
  avatarGoblin,
  avatarBandido,
  avatarDragon,
  avatarLobo,
} from "./constants/Constants.js";
import { combate } from "./modules_game/Batalla.js";
import { distinguirJugador } from "./modules_game/Ranking.js";
import {
  filtrarProductos,
  aplicarDescuento,
  buscarProductoNombre,
  obtenerListaProductosFinales,
} from "./modules_game/Mercado.js";

//   const seccion2 = document.getElementById("seccion-2");
//   const seccion3 = document.getElementById("seccion-3");
//   const seccion4 = document.getElementById("seccion-4");
//   const seccion5 = document.getElementById("seccion-5");

window.addEventListener("load", iniciarJuego);

function iniciarJuego(e) {
  const jugador = new Cazador("Cazador", 30, avatarCazador, 50, 30);
  const enemigos = [
    new Goblin("Goblin", avatarGoblin, 6, 30),
    new Lobo("Lobo", avatarLobo, 9, 42),
    new Dragon("Dragon", avatarDragon, 28, 140, "aliento Igeno"),
    new Bandido("Bandido", avatarBandido, 12, 55),
    new Jefe("Jefe", avatarJefe, 12, 55),
  ];

  const seccion1 = document.getElementById("seccion-1");
  mostrarSeccion(seccion1.id);

  //   elementos de la seccion1
  document.getElementById("title").textContent = "Aventura JS";
  document
    .getElementById("imagen-jugador")
    .setAttribute("src", `${jugador.avatar}`);
  document
    .getElementById("nombre-jugador-container")
    .querySelector("h2").textContent = `${jugador.nombre}`;
  const valores = Array.from(document.querySelectorAll(".valor"));
  const valoresJugador = [
    jugador.ataque,
    jugador.defensa,
    jugador.hp,
    jugador.puntos,
  ];
  valores.forEach((valor, i) => {
    valor.textContent = `${valoresJugador[i]}`;
  });

  const boton = seccion1.querySelector("button");
  boton.addEventListener("click", (e) => {
    mostrarSeccion("seccion-2");
  });
}

function mostrarSeccion(id) {
  const secciones = Array.from(document.querySelectorAll(".seccion"));
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  const seccionMostrar = document.getElementById(id);
  seccionMostrar.style.display = "";
}

function seccion1() {}
