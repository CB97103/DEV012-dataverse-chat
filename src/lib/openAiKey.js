import data from "../data/dataset.js";


// Envia petición de la api al backend 
//Fetch client - asycroni method (proceso paralelo)
const endpoint = 'https://api.openai.com/v1/chat/completions'; 
export const moviesByName = data.map(Element => Element.name); //recorremos la data con un .map

export function getOpenIAapi(moviesByName, userText){
const apiKey = localStorage.getItem("apiKey");

const allData = {
    "model": "gpt-3.5-turbo",
    "messages":[
        {
            "role": "system",
            "content": `We are all ${moviesByName} the movies how are you? `,
        },
        {role: "user", content: userText}
    ],  
};
 const result = fetch(endpoint, {
    method: "POST",
    headers:{
"Content-Type": "application/json",
"Authorization": `Bearer ${apiKey} `
    },
    body: JSON.stringify(allData),
})
return result;
}

export function panelOpenIAapi(moviesByName, userText){
    const apiKey = localStorage.getItem("apiKey");
    const allData = {
        "model": "gpt-3.5-turbo",
        "messages":[
            {
                "role": "system",
                "content": `Hola  ${moviesByName} movie how are you? `,
            },
            {role: "user", content: userText}
        ],
    };

     const result = fetch(endpoint, {
        method: "POST",
        headers:{
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey} `
        },
        body: JSON.stringify(allData),
    })
    return result;
    }
    