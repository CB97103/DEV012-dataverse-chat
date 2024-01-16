// IMPORTA LA  FUNCIÓN QUE VOY A PROBAR
import { chatCompletions } from "../src/lib/openAiKey";

// Crear un mock de la respuesta que esperaría obtener de los servidores de openAI
const openAIResponse = jest.fn();

// HACE UNA IMPLEMENTACIÓN FALSA DE FETCH
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: openAIResponse,
  })
);

// IMPLEMENTA SUIT DE TEST
describe("Ensure the OpenAI endpoint is properly validated", () => {
  it("Confirming that the API is called with the required data", () => {
    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: "¡hola!",
        },
      ],
    };

    chatCompletions("918273", body);
    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 918273`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  });

  it("Validates the response format", () => {
    const response = {
      choices: [
        {
          message: {
            role: "assistant",
            content: "¡Hola!",
          },
        },
      ],
    };
    // const responseJSON = JSON.stringify(response);
    openAIResponse.mockResolvedValueOnce(response);

    return chatCompletions("918273", [{ role: "user", content: "foo" }]).then(
      (resolved) => {
        resolved.json().then(function (result) {
          expect(result).toEqual(response);
        });
      }
    );
  });
});
