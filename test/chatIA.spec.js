import { chatIA } from "../src/components/chatIA";

describe("Chat", () => {
  it("should show the chat in the page", () => {
    document.body.appendChild(chatIA());
    const chatElement = document.querySelector(".chatIA");

    expect(chatElement).not.toBeNull();
    expect(chatElement.innerHTML).toBeDefined();
  });
});
