import _ from "underscore";

/**
 * This function create and return a new deck.
 * @param {Array<String>} tiposDeCartas Example: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} return a new deck.
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0) {
    throw new Error(
      "1) tiposDeCartas es obligatorio\n2) Tiene que ser un arreglo de string"
    );
  }
  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error(
      "1) tiposEspeciales es obligatorio\n2) Tiene que ser un arreglo de string"
    );
  }

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
