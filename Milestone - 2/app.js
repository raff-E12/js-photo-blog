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

async function HandleApiGenResponse(){
    let response = await fetch(url);
    let data_obj = await response.json();
    console.log("Risposta Dell'Api:", data_obj);
    let title = []
    // Prova di Creazione di risposta API - per scopo di verifica e implementazione.
    setTimeout(()=>{
        for (let index = 0; index < 6; index++) {
            title.push(data_obj[index].title);
        // Prova di Interazione con il DOM con L'API.
            let text_node = document.createTextNode(title[index]);
            let create_li = document.createElement("li");
            create_li.appendChild(text_node);
            parent_node.appendChild(create_li);
        }
    }, 1100)
    return parent_node
}

HandleApiGenResponse();