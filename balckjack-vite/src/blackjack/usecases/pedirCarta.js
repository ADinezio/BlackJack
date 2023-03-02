/**
 * This function check if the deck have any card. If the deck have cards it will return one.
 * @param {Array<string>} deck
 * @returns {String}
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  return deck.pop();
};
