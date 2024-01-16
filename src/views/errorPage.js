/* eslint-disable import/prefer-default-export */
import { header } from "../components/header.js";
import { secondaryNav } from "../components/secondaryNav.js";
import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";

const createErrorMessage = () => {
  const errorMessageHTML = `<h2 class='errorTitle'>Página no encontrada</h2>
   <p>Lo sentimos, la página que estás buscando no existe.
   Por favor, verifica la URL o regresa a la página de inicio.</p>
   <img class='errorImg' src='./media/errorImg2.png'/>`;
  const nodoErrorElement = document.createElement("section");
  nodoErrorElement.innerHTML = errorMessageHTML;
  nodoErrorElement.classList.add("errorSection");

  return nodoErrorElement;
};

export const errorPage = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(createErrorMessage());
  section.appendChild(footer());

  const homeButton = section.querySelector(".imgHome");
  homeButton.addEventListener("click", () => navigateTo("/"));

  return section;
};
