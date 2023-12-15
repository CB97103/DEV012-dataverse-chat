export const errorPage = () => {
  const section = document.createElement('section');
  section.appendChild(createErrorMessage());
  return section;
};

const createErrorMessage = () => {
  const errorMessageHTML = `<img class="error-img" src="./media/errorImg2.png"/> <h2>Page not found</h2>`; // template string
  const nodoErrorElement = document.createElement('h2'); // crea el nodo
  nodoErrorElement.innerHTML = errorMessageHTML;
  nodoErrorElement.classList.add('errorHeading');

  return nodoErrorElement;
};
