// Scopo del Progetto:
// Realizzazione di Galleria di immagini con il js utilizzando un api.
// Basato sulla creazione degli elementi dettati dallo script nel DOM.

/**
 * Indice di Funzionamento dello Script:
 *
 * @type {"https://lanciweb.github.io/demo/api/pictures/"} - URL dell'API.
 * 
 *  Variabili:
 * 
 * @var {parent_node} = Variabile di contenimento dell'elemento id "#parent-node".

 * @var {fragment_node} = Contenitore di nodi temporaneo per il DOM.

   @var {loading_cod} = Messaggio di avviso di loading per l'Api.

    Funzioni:

    @function HandleAPIGenResponse - Crea una chiamata asincrona di risposta con l'API.

    @function HandlePhotoGen - Genera le foto create in risposta dall'API, per poi inserirle nel DOM.
 */

// Variabili
const url = "https://lanciweb.github.io/demo/api/pictures/";
let parent_node = document.getElementById('parent-node');
let fragment_node = document.createDocumentFragment();
let loading_cod = false;

//Oggetto di contenimento
let gallery_obj = [
    {id: 1, title: "Skate Park", date: "01-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/1.png"},
    {id: 2, title: "Passeggiata", date: "16-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/2.png"},
    {id: 3, title: "Alpi", date: "01-07-2024", url: "https://marcolanci.it/boolean/assets/pictures/3.png"},
    {id: 4, title: "Sagra", date: "21-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/4.png"},
    {id: 5, title: "Watergun", date: "23-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/5.png"},
    {id: 6, title: "Riviera", date: "30-08-2024", url: "https://marcolanci.it/boolean/assets/pictures/6.png"},
];

//Funzioni
async function HandleAPIGenResponse(){
    let response = await fetch(url);
    let data_obj = await response.json();
    // console.log(title);
    setTimeout(()=>{
        loading_cod = true;
        let title = gallery_obj.map(({title}) => title);
        let data = gallery_obj.map(({date}) => date);
        let url_list = gallery_obj.map(({url}) => url);
        let id_list = gallery_obj.map(({id}) => id);
        // console.log("Funzione asincrona attiva");
        return HandlePhotoGen(title, data, id_list, url_list);
    }, 1200)
}

function HandlePhotoGen(title, data, id, img) {
    parent_node.innerHTML = "";
 for (let index = 0; index < 6; index++) {
    let photo = document.createElement("div");
    let pin_box = document.createElement("span");
    let img_pin = document.createElement("img");
    let img_box = document.createElement("span");
    let text_box = document.createElement("span");
    let text_par = document.createElement("p");
    let text_node = document.createTextNode( `${title[index]} - ${data[index]}`);

    photo.setAttribute("class", "photo d-flex");
    pin_box.setAttribute("class", "box-pin d-flex");
    img_pin.setAttribute("src", "../../img/pin.svg");
    img_pin.setAttribute("alt", "pin-img");
    img_box.setAttribute("class", "img-photo");
    img_box.style.backgroundImage = `url(${img[index]})`;
    img_box.id = `photo-${id[index]}`;
    text_box.setAttribute("class", "text-photo d-flex");
    
    photo.append(pin_box);
    pin_box.appendChild(img_pin);
    photo.appendChild(img_box);
    photo.append(text_box);
    text_box.append(text_par);
    text_par.appendChild(text_node);

    fragment_node.append(photo);
    parent_node.append(fragment_node);
 }
   return parent_node
}
// Inserire la funzione nel caricamento in finestra
window.addEventListener("load", ()=>{
    HandleAPIGenResponse();
    if(!loading_cod){
       parent_node.innerHTML = `  <div class="alert alert-danger alert-box-sc" role="alert">
               <h2>Caricamento...</h2>
              </div>`;
    }
});