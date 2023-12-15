import { header } from '../components/header.js';
import { navBar } from '../components/nav.js';
import { footer } from '../components/footer.js';

export const apiKey = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(navBar());
  section.appendChild(apiKeyView());
  section.appendChild(footer());
  return section;
};

export const apiKeyView = () => {
  const apiViewHTML = `<h2>API KEY</h2> 
  <p class="apiText">¡Para interactuar con las péliculas, es necesario que ingreses tu APIKEY!</p>
  <input name="apiKey"
  type="text"
  placeholder="INGRESA TU API KEY..."/>
  <button id="clearApiButton">Limpiar</button>
  <button id="saveApiButton">Guardar</button>`; // template string
  const nodoApiView = document.createElement('body'); // Nodo
  nodoApiView.innerHTML = apiViewHTML;
  nodoApiView.classList.add('apiBody');

  return nodoApiView;
};
