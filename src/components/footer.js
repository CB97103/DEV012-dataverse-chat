export const footer = () => {
  const htmlFooter = `<p>Desarrollado por Gineth G</p>`; 
  const nodoFooter = document.createElement('footer');
  nodoFooter.innerHTML = htmlFooter;
  nodoFooter.classList.add('footer');

  return nodoFooter;
};
