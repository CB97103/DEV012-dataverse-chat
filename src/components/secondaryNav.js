export const secondaryNav = () => {
  const navHome = document.createElement("nav");
  navHome.classList.add("secondaryNav");
  
  const homeIcon = document.createElement("img");
  homeIcon.className = "imgHome";
  homeIcon.src = "./media/home.png";

  navHome.appendChild(homeIcon);

  return navHome;
};
