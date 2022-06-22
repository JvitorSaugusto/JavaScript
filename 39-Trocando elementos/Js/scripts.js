/*
Podemos também trocar um elemento no DOM;
Ou seja, substituir uma tag por outra e de modo bem fácil;
*/

// criar um elemento

var el = document.createElement("h3");

el.classList = "testando-classe"; // botando classe no elemento

var texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto); // adicionando texto na classe

console.log(texto);

// selecionar o elemento que quero trocar
var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do elemento (title)
// var body = document.querySelector("body");
// a função a seguir ja seleciona o pai do elemento automaticamente
var pai = title.parentNode;

//trocar os elementos
pai.replaceChild(el, title);