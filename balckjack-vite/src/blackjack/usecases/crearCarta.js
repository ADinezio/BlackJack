/**
 *This function creates and return a new card
 * @param {String} card
 * @returns {HTMLImageElement} HTML image element
 */
export const crearCarta = (carta) => {
  if (!carta) throw new Error("La carta es obligatoria");

  let nuevaCarta = document.createElement("img");
  nuevaCarta.classList.add("carta");
  nuevaCarta.src = `assets/cartas/${carta}.png`;
  return nuevaCarta;
};
