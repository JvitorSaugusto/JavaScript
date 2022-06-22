/*
Podemos alterar os atributos via JS e DOM;
Por exemplo: alterar o atributo alt de uma imagem;
Ou até um src de uma imagem;
Todos os atributos podem ser alterados via JS!
*/
// adicionar atributo
var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

var  btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo-2");

// removendo um atributo
var lista = document.querySelector("#lista");

lista.removeAttribute("id");