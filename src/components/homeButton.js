export const homeBtn = () => {
    const sectionHomeButton = document.createElement("section");
    sectionHomeButton.classList.add("nav");
    const homeButton = document.createElement("nav");
    homeButton.className = "homeButton";
    const img = document.createElement("img");
    img.className = "imgHome";
    img.src = "./media/home.png";
    
    homeButton.appendChild(img);
    sectionHomeButton.appendChild(homeButton);
  
    return sectionHomeButton;
    
  };