import { navBar } from "../src/components/nav";

describe("Navigation Component", () => {
  it("should render the navigation bar", () => {
    
    document.body.appendChild(navBar());
    const navElement = document.querySelector(".navComponent");

    expect(navElement).not.toBeNull();
    expect(navElement.innerHTML).toBeDefined();
  });
});
