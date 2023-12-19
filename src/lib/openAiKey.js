import data from "../data/dataset.js";


// Envia petición de la api al backend 
//Fetch client - asycroni method (proceso paralelo)
const endpoint = 'https://api.openai.com/v1/chat/completions'; 
const moviesByName = data.map(Element => Element.name);

export function getOpenIAapi(moviesByName, userText){
const apiKey = localStorage.getItem("apiKey");
console.log(apiKey);


 const result = fetch(endpoint, {
    method: "POST",

    headers:{
"Content-Type": "application/json",
"Authorization": `Bearer ${apiKey} `
    },
    body: {
        "model": "gpt-3.5-turbo",
        "messages":[
            {
                "role": "system",
                "content": "hello"
            }
        ]
    }
})
return result;
}
