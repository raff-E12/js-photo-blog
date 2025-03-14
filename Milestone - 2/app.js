// Scopo del Progetto:
// Realizzazione di Galleria di immagini con il js utilizzando un api.
// Basato sulla creazione degli elementi dettati dallo script nel DOM.

/**
 * Indice dei Componenti dello script:
 *
 * @type {"https://lanciweb.github.io/demo/api/pictures/"} - URL dell'Api per la risposta AJAX.
 * 
 * @var {"parent_node"} - Variabile di contenimento sull elemento "#parent-node".
 * 
 * @function {"HandleApiGenResponse"} - Funzione di chiamata Api con il metodo fetch().
 * 
 */

const url = "https://lanciweb.github.io/demo/api/pictures/";
let parent_node = document.getElementById("parent-node");

let gallery_obj = [
    {id: 1, title: "Skate Park", date: "01-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/1.png"},
    {id: 2, title: "Passeggiata", date: "16-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/2.png"},
    {id: 3, title: "Alpi", date: "01-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/3.png"},
    {id: 4, title: "Sagra", date: "21-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/4.png"},
    {id: 5, title: "Watergun", date: "23-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/5.png"},
    {id: 6, title: "Riviera", date: "30-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/6.png"},
];

async function HandleApiGenResponse(){
    let response = await fetch(url);
    let data_obj = await response.json();
    console.log("Risposta Dell'Api:", data_obj);
    // Destruturazione del Array di oggetti
    let title = gallery_obj.map(({title}) => title);
    let data = gallery_obj.map(({date}) => date);
    let url_list = gallery_obj.map(({url}) => url);
    console.log(title);
    console.log(data);
    console.log(url_list);
    // Prova di Creazione di risposta API - per scopo di verifica e implementazione.
    setTimeout(()=>{
        for (let index = 0; index < 6; index++) {
        // // Prova di Interazione con il DOM con L'API.
            let text_node = document.createTextNode(title[index]);
            let create_li = document.createElement("li");
            create_li.appendChild(text_node);
            parent_node.appendChild(create_li);
        }
    }, 1100)
    return parent_node
}

HandleApiGenResponse();