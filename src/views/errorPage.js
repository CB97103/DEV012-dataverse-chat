/* eslint-disable import/prefer-default-export */
import { header } from '../components/header.js';
import { secondaryNav } from '../components/secondaryNav.js';
import { footer } from '../components/footer.js';
import { navigateTo } from '../router.js';

const createErrorMessage = () => {
  const errorMessageHTML = `<h4 class='errorMessage'>Página no encontrada</h4>
  <img class='errorImg' src='./media/errorImg2.png'/> `; // template string
  const nodoErrorElement = document.createElement('h2'); // crea el nodo
  nodoErrorElement.innerHTML = errorMessageHTML;
  nodoErrorElement.classList.add('errorSection');

  return nodoErrorElement;
};

export const errorPage = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(createErrorMessage());
  section.appendChild(footer());

  const homeButton = section.querySelector('.secondaryNav');
  homeButton.addEventListener('click', () => navigateTo('/'));
  return section;
};
