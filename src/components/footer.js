
export const footer = () => {
    const htmlFooter = `<p>Developed by Gineth</p>`; //template string
    const nodoFooter = document.createElement("footer");//Nodo 
    nodoFooter.innerHTML = htmlFooter;
    nodoFooter.classList.add("footer");

    return nodoFooter;
}