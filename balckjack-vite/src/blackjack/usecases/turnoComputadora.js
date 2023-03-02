import { crearCarta } from "./crearCarta";
import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";

/**
 *
 * @param {Number} puntosMinimos minimum points the computer needs to win
 * @param {HTMLElement} puntosHTML HTML element to show the points
 * @param {HTMLElement} divCartasComputadora HTML element to show the cards
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  let puntosComputadora = 0;

  if (!puntosMinimos) throw new Error("puntosMinimos es necesario!");
  if (!deck || deck === 0) throw new Error("deck es necesario!");
  if (!puntosHTML) throw new Error("puntosHTML es necesario!");
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;
    const nuevaCarta = crearCarta(carta);
    divCartasComputadora.append(nuevaCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
