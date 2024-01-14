import { header } from '../components/header.js';
import { navigateTo } from '../router.js';
import { footer } from '../components/footer.js';
import { secondaryNav } from '../components/secondaryNav.js';
import { chatCompletions } from '../lib/openAiKey.js';

export const apiKeyPage = () => {
  const apiKeyView = () => {
    const apiViewHTML = `<h2>API KEY</h2> 
    <p class="apiText">Para interactuar con las péliculas, es necesario que ingreses tu APIKEY</p>
    <input class="apiKeyInput"
    type="password"
    placeholder="Ingresa tu API Key..."/>
    <button id="clearApiButton">Limpiar</button>
    <button id="saveApiButton">Guardar</button>`; 
    const nodoApiView = document.createElement("section");
    nodoApiView.innerHTML = apiViewHTML;
    nodoApiView.classList.add("apiSection");
  
    return nodoApiView;
  };
  // Aquí comienza otro
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(apiKeyView());
  section.appendChild(footer());

  const homeButton = section.querySelector('.secondaryNav');
  homeButton.addEventListener('click', () => navigateTo('/'));

  const validateApiKey = /^(?=(?:.*[a-z]){2})(?=.*-)(?=(?:.*[a-zA-Z0-9]){48}).+$/;
  const apiKeyInput = section.querySelector('.apiKeyInput');
  const btnSaveApiKey = section.querySelector('#saveApiButton');

  btnSaveApiKey.addEventListener('click', () => {
    if(apiKeyInput.value === "" ) {
      alert("Ingrese su API key")
    }else if(apiKeyInput.value === validateApiKey) {
      alert("Validando API key");
      chatCompletions(apiKeyInput)
    }else {
      alert("La API key ingresada es incorrecta")
    }
  });

  const btnClearApiKey = section.querySelector('#clearApiButton');


  btnClearApiKey.addEventListener('click', () => {
    apiKeyInput.value = '';
  });


  return section;
};


