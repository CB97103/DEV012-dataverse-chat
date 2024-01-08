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
  const movieView = `<section class="description">
    <img src="${movieIdentApiData.imageUrl}" class="detailsImage"alt="${movieIdentApiData.name}"/>
    <div class="descriptionContainer">
    <h3>Description</h3>
    <p>${movieIdentApiData.description}</p>
    </div>
    </section>
    <section class="detailsMovie"> 
     <h2> ${movieIdentApiData.name}</h2>
    <h3>Genre</h3><p>${movieIdentApiData.facts.genre}</p>
    <h3>Studio</h3><p>${movieIdentApiData.facts.studio}</p>
    <h3>Year</h3>
    <p>${movieIdentApiData.facts.year}</p>
    </section >
    `;
  containerMovie.innerHTML = movieView;

  section.appendChild(containerMovie);

  section.appendChild(chatIA());
  section.appendChild(footer());

 

  // API KEY

  const buttonChatOneMovie = section.querySelector(".sendButton");
  buttonChatOneMovie.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que vuelva a cargarse la página

  const apiKey = localStorage.getItem("apiKey");
  const prompt = section.querySelector("#prompt");
  const button = section.querySelector(".sendButton");
  const output = section.querySelector(".chatIA");


  chatCompletions(apiKey, {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Actuando como un personaje de la película ${movieIdentApiData.name} responde las preguntas con sus expresiones y antes de responder presentate`,
      }, 
      {
        role: "user",
        content: prompt,
      },
    ],
  })
    .then((responseOpenIA) => {
      responseOpenIA.json().then((responseJSObject) => {
        console.log(responseJSObject);
        console.log(responseJSObject.choices);
      });
      return fetch(prompt.value);
    }).then(response => response.json())
    .then(data => {
        output.innerHTML = data.choices[0].message.content;
        console.log(data);
    })
    .catch((error) => {
      alert("Hubo un error al comunicarse con la API."+ error);
      // .catch((error) => {
      // console.error("Hubo un error al comunicarse con la API.", error);
    });
})
const homeButton = section.querySelector(".secondaryNav");
homeButton.addEventListener("click", () => navigateTo("/", "properties"));
    return section;
}