import { header } from '../components/header.js';
import { navBar } from '../components/nav.js'; 
import { footer } from '../components/footer.js';

export const panel = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(navBar());
  section.appendChild(createPanelMessage());
  section.appendChild(footer());
  return section;
};

export const createPanelMessage = () => {
  const panelMessageHTML = `<h3> Interactúa con todas nuestras películas a través 
  del chat y descubre historias cautivadoras y momentos inolvidables.</h3>`; // template string
  const nodoPanelElement = document.createElement('h3'); // Nodo
  nodoPanelElement.innerHTML = panelMessageHTML;
  nodoPanelElement.classList.add('panelHeading');

  return nodoPanelElement;
};
