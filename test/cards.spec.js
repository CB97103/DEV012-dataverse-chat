import { renderData } from "../src/components/cards";

describe("Render view", () => {
  it("should show the data in the page", () => {
    const mockData = [
      {
        id: "suzume",
        name: "Suzume",
        shortDescription:
          "Únete a Suzume en un emocionante viaje por Japón para cerrar puertas misteriosas y descubrir su madurez y libertad.",
        description:
          "Es una película de animación japonesa dirigida por Makoto Shinkai, estrenada en 2022. La historia sigue a Suzume Iwato, una joven de 17 años que descubre una misteriosa puerta en las montañas de Kyushu. Cuando la abre, se desencadenan una serie de desastres en todo Japón. Suzume se embarca en un viaje para cerrar estas puertas y salvar al país. Suzume se enfrenta a desafíos físicos y emocionales a lo largo de su viaje, pero aprende a superarlos con la ayuda de los que conoce en el camino.",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNGVkNDc3NjUtNTY5ZS00ZmE0LWE3YzctMDk2OTRlNTdiZWQwXkEyXkFqcGdeQXVyMTU3NDg0OTgx._V1_.jpg",
        facts: {
          year: 2022,
          genre: "Fantasía · Aventura",
          studio: "Studio Ghibli",
        },
      },
    ];

    document.body.appendChild(renderData(mockData));
    const cardsElement = document.querySelector(".cardsContainer");

    expect(cardsElement).not.toBeNull();
    expect(cardsElement.innerHTML).toBeDefined();
  });
});
