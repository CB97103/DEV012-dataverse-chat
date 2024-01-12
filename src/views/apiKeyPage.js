import { header } from '../components/header.js';
import { navigateTo } from '../router.js';
import { footer } from '../components/footer.js';
import { secondaryNav } from '../components/secondaryNav.js';

export const apiKeyPage = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(apiKeyView());
  section.appendChild(footer());

  const homeButton = section.querySelector('.homeButton');
  homeButton.addEventListener('click', () => navigateTo('/'));

  const btnSaveApiKey = section.querySelector('#saveApiButton');
  btnSaveApiKey.addEventListener('click', () => {
  });

  return section;
};

const apiKeyView = () => {
  const apiViewHTML = `<h2>API KEY</h2> 
  <p class="apiText">¡Para interactuar con las péliculas, es necesario que ingreses tu APIKEY!</p>
  <input id="apiKeyInput"
  type="text"
  placeholder="Ingresa tu API Key..."/>
  <button id="clearApiButton">Limpiar</button>
  <button id="saveApiButton">Guardar</button>`; //template string
  const nodoApiView = document.createElement("section"); //Nodo
  nodoApiView.innerHTML = apiViewHTML;
  nodoApiView.classList.add("apiSection");

  return nodoApiView;
};
