import { header } from "../src/components/header"; 

describe("show header", () => {
  it("should render the header", () => {

    document.body.appendChild(header());
    const headerElement = document.querySelector(".headerComponent");

    expect(headerElement).not.toBeNull();
    expect(headerElement.innerHTML).toBeDefined();
  });
});
