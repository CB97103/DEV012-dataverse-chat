// IMPORTA LA  FUNCIÓN QUE VOY A PROBAR
import { chatCompletions } from '../src/lib/openAiKey';

// Crear un mock de la respuesta que esperaría obtener de los servidores de openAI
const openAIResponse = jest.fn().mockResolvedValueOnce({ choices: [{ message: "foo" }] });

// HACER UNA IMPLEMENTACIÓN FALSA DE FETCH
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: openAIResponse,
  }),
);

// IMPLEMENTAR SUIT DE TEST
describe("Validate  open AI endpoint", () => {
  it("La API es llamada con los datos requeridos", () => {
    const messages = [{ role: "user", content: "foo" }];

    chatCompletions("918273", messages);
    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 918273`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages
        }),
      },
    );
  });

  it("Valida el formato de respuesta", () => {
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

    openAIResponse.mockResolvedValueOnce(response);

    return chatCompletions("918273", [{ role: "user", content: "foo" }]).then(
      (resolved) => {
        expect(resolved).toEqual(response);
      },
    );
  });
});
