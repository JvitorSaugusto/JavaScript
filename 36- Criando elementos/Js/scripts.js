/*
Outra possibilidade do JS e o DOM é criar elementos;
O texto de um elemento é considerado um nó na árvore do DOM;
Ou seja, temos que criar o texto do elemento também;
*/

// criar o elemento > inserir o node texo > inserir o node no elemento > 
// mapeou o body que é o pai do elemento que vai inserir e dps deu o append child para inserir o elemento no child;
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

console.log(body);

body,appendChild(novoParagrafo);
// inserir em um container
var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);