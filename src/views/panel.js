import { header } from "../components/header.js";
import { homeBtn } from "../components/homeButton.js";
import { navigateTo } from "../router.js";
import { footer } from "../components/footer.js";

export const panel = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(homeBtn());
  section.appendChild(createPanelMessage());
  section.appendChild(footer());

  const homeButton = section.querySelector("nav");
  console.log ("homeButton");
  homeButton.addEventListener("click",() => navigateTo("/"));


  return section;
};

export const createPanelMessage = () => {
  const panelMessageHTML = `<h3> Interactúa con todas nuestras películas a través 
  del chat y descubre historias cautivadoras y momentos inolvidables.</h3>`; //template string
  const nodoPanelElement = document.createElement("h3"); //Nodo
  nodoPanelElement.innerHTML = panelMessageHTML;
  nodoPanelElement.classList.add("panelHeading");

  return nodoPanelElement;
};
