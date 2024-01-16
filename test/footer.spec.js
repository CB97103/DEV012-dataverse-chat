import { footer } from "../src/components/footer";

describe("show footer", () => {
  it("should render the footer", () => {

    document.body.appendChild(footer());
    const footerElement = document.querySelector(".footer");

    expect(footerElement).not.toBeNull();
    expect(footerElement.innerHTML).toContain("Desarrollado por Gineth G");
  });
});
