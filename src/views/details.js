import { header } from '../components/header.js';
import { secondaryNav } from '../components/secondaryNav.js';
import { chatIA } from '../components/chatIA.js';
import { footer } from '../components/footer.js';
import { chatCompletions } from '../lib/openAiKey.js';
import { navigateTo } from '../router.js';
import { getElementById } from '../lib/apiData.js';

export const details = () => {
  const section = document.createElement('section');

  section.appendChild(header());
  section.appendChild(secondaryNav());

  const containerMovie = document.createElement('section');
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
    <h6>Genre</h6><p>${movieIdentApiData.facts.genre}</p>
    <h6>Studio</h6><p>${movieIdentApiData.facts.studio}</p>
    <h6>Year</h6>
    <p>${movieIdentApiData.facts.year}</p>
    </section >
    `;
  containerMovie.innerHTML = movieView;

  section.appendChild(containerMovie);
  section.appendChild(chatIA());
  section.appendChild(footer());

  /*
  const userMessageElement = document.createElement("p");
      userMessageElement.textContent = prompt.value;
      userMessageElement.classList.add("userMessages");

    userMessageElement.style.color = "black";
      // Agrega el  mensaje al contenedor del chat
      chatsSection.appendChild(userMessageElement);
*/

  // SECCIÓN CHAT IA IMAGEN Y NOMBRE

  const chatsSectionMovie = section.querySelector('.user');
  const sectionMovieChat = document.createElement('img');
  sectionMovieChat.src = movieIdentApiData.imageUrl;
  console.log(sectionMovieChat);
  sectionMovieChat.classList.add('imgMovie');
  chatsSectionMovie.appendChild(sectionMovieChat);

  const sectionMovieChatIA = document.createElement('h4');
  sectionMovieChatIA.innerHTML = `${movieIdentApiData.name}`;
  chatsSectionMovie.style.color = 'white';
  console.log(sectionMovieChatIA);
  sectionMovieChatIA.classList.add('h4');
  chatsSectionMovie.appendChild(sectionMovieChatIA);

  // MENSAJE USUARIO

  const prompt = section.querySelector('#prompt');
  const chatsSection = section.querySelector('.chats');
  console.log(prompt.value);

  const buttonChatOneMovie = section.querySelector('.sendButton');

  buttonChatOneMovie.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que la página se recargue y envie el formulario

    // Necesita escuchar el evento
    if (prompt.value) {
      // Crea un nuevo elemento para presentar el mensaje del usuario
      const userMessageElement = document.createElement('p');
      userMessageElement.textContent = prompt.value;
      userMessageElement.classList.add('userMessages');

      userMessageElement.style.color = 'black';
      // Agrega el  mensaje al contenedor del chat
      chatsSection.appendChild(userMessageElement);

      // Limpia el campo de entrada
      // prompt.value = "";
    }

    // MENSAJE API

    chatCompletions(localStorage.getItem('apiKey'), {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Actua como un personaje principal de la película ${movieIdentApiData.name} presentate una vez y responde las preguntas con sus expresiones`,
        },
        {
          role: "user",
          content: prompt.value,
        },
      ],
    })
      .then((responseOpenIA) => {
        return responseOpenIA.json();
      })
      .then((data) => {
        //crear un nuevo elemenmtno añadirle messageIA clase y añadirlo a chats section
        console.log(data);
        console.log(data.choices);
        const IAsMessageElement = document.createElement('p');
        IAsMessageElement.textContent = data.choices[0].message.content;
        IAsMessageElement.classList.add('AIsResponse');
        chatsSection.appendChild(IAsMessageElement);
        // output.innerHTML = data.choices[0].message.content;
      })
      /*  .then((responseOpenIA) => {
    return responseOpenIA.json();
  })
  .then((data) => {
    // Manejar la respuesta JSON
    console.log(data);
    console.log(data.choices);
    output.innerHTML = data.choices[0].message.content;
    */
      .catch((error) => {
        console.error('Error en la petición:', error);
        alert('Hubo un error al comunicarse con la API.');
      })
      // Para que se limpie el input cuando la IA responda
      .finally(() => {
        prompt.value = "";
      });
  });

  const homeButton = section.querySelector('.secondaryNav');
  homeButton.addEventListener('click', () => navigateTo('/'));

  return section;
};
