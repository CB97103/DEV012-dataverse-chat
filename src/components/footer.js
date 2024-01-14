export const footer = () => {
  const htmlFooter = `<p>Desarrollado por Gineth G</p>`; //template string
  const nodoFooter = document.createElement('footer'); //Nodo
  nodoFooter.innerHTML = htmlFooter;
  nodoFooter.classList.add('footer');

  return nodoFooter;
};
