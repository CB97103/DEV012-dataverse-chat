// crea arrow function para creación 
import data from "../data/dataset.js"


export const chatCompletions = (apiKey, data) => {

    fetch ("https://api.openai.com/v1/chat/completions",{ //.fetch es una promesa
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer $[API]`,

        },
        body:JSON.stringify(data),
    }).then((responseJSON) => {  //Crea la promesa
responseJSON.json().then(response => {
    return response;
})
    })

    

}