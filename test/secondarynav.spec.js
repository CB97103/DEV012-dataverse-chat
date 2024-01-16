import { secondaryNav } from "../src/components/secondaryNav";

describe("show secondary nav", () => {
  it("should render the secondary nav", () => {

    document.body.appendChild(secondaryNav());
    const secondaryNavElement = document.querySelector(".secondaryNav");

    expect(secondaryNavElement).not.toBeNull();
    expect(secondaryNavElement.innerHTML).toBeDefined();
  });
});
