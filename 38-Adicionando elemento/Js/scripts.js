/*
Podemos inserir um elemento dentro de outro, por exemplo um parágrafo em uma div;
Isso é considerado como "acrescentar um filho" em JS;
*/

// criar elementos
var el = document.createElement("div");

el.classList = "div-criada";   //adiciona classe

console.log(el);

//inserindo esse elemento filho com o appendChild

var container = document.querySelector("#container");

container.appendChild(el);

// inserBefore - insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2, el3);  // primeiro o parametro q vai ser inserido (el2) e dps a referencia para inserir um antes dele (el3)