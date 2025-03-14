// Scopo del Progetto:
// Realizzazione di Galleria di immagini con il js in questione.

const url = "https://lanciweb.github.io/demo/api/pictures/";
let parent_node = document.getElementById("root");

async function HandleApiGenResponse(){
    let response = fetch(url).then(response => response.json());
    return response
}

console.log(HandleApiGenResponse());