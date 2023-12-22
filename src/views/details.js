import { header } from "../components/header.js";
import { secondaryNav } from "../components/secondaryNav.js";
import { chatIA } from "../components/chatIA.js";
import { footer } from "../components/footer.js";
import { chatCompletions } from "../lib/openAiKey.js";
import { navigateTo } from "../router.js";
import { getElementById } from "../lib/apiData.js";

export const details = () => {
  const section = document.createElement("section");
  
  section.appendChild(header());
  section.appendChild(secondaryNav());
  
  const containerMovie = document.createElement("section");
  const movieIdent = sessionStorage.getItem(`cardsMovie`);
  const movieIdentApiData = getElementById(movieIdent);
  const movieView = `<h2>Nombre ${movieIdentApiData.name}</h2>
   <img src="${movieIdentApiData.imageUrl}" alt="${movieIdentApiData.name}"/>
    <p>${movieIdentApiData.facts.studio}</p>
    <p>${movieIdentApiData.description}</p>
    <p>${movieIdentApiData.facts.genre}</p>
    <p>${movieIdentApiData.facts.year}</p>`;
  containerMovie.innerHTML = movieView; 

  section.appendChild(containerMovie); 

 
  section.appendChild(chatIA());
  section.appendChild(footer());

  const homeButton = section.querySelector(".secondaryNav");
  homeButton.addEventListener("click", () => navigateTo("/"));


  /*
  // API KEY
  chatCompletions(localStorage.getItem("apiKey"), {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Responde a mis preguntas como si fueras un personaje aleatorio de la película Akira, inicia tu respuesta presentandote. Responde todas las preguntas relacionadas con la película",
      },
      {
        role: "user",
        content: "Hola, hablame de Akira"
      },
    ],
  })
    .then((responseOpenIA) => {
      responseOpenIA.json().then((responseJSObject) => {
       console.log(responseJSObject);
       console.log(responseJSObject.choices);
      });
    })
    .catch((error) => {
      alert("Hubo un error al comunicarse con la API.");
    });
*/


  return section;
};
