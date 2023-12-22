import { navigateTo } from "../router.js";

export const renderData = (data) => {
  //el ciclo es independiente del html
  let htmlCards = "";
  const nodoCards = document.createElement("ul"); // Crea el Nodo
  nodoCards.setAttribute("id", "allCards"); // crea un nodo nuevo con atributo - id
  data.forEach((items) => {
    htmlCards += `<li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemContainer" data-id="${items.id}">
                  <dl itemscope itemtype="PeliculasAnimacionJaponesa">
                  <img src="${items.imageUrl}" alt="${items.name}"/>
                  <div class="texto">
                  <dt></dt><dd itemprop="studio">${items.facts.studio}</dd>
                  <dt></dt><dd itemprop="name">${items.name}</dd>
                  <dt></dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
                  <dt></dt><dd itemprop="genre">${items.facts.genre}</dd>
                  <dt></dt><dd itemprop="year">${items.facts.year}</dd>
                  </div>
                </dl>
              </li>`; //template string
/*
       const savedApi = localStorage.getItem("apiKey");
    //nodoCards.addEventListener("click", (e) => {
  
      navigateTo("/details", "properties");
    });
    //e.preventDefault();
*/
    // if (savedApi === null) {

    //}
    //});
  });
  nodoCards.innerHTML = htmlCards;
  nodoCards.classList.add("cardsContainer");

  const savedApi = localStorage.getItem("apiKey");

  nodoCards.addEventListener("click", (e) => {
    const clickedElement = e.target.closest("li[data-id]");
    if (clickedElement) {
      const itemId = clickedElement.getAttribute("data-id");
      sessionStorage.cardsMovie = itemId;
      navigateTo("/details", "properties"); // Todos deben llevar 2 parame
    }
  });

  return nodoCards;
};
