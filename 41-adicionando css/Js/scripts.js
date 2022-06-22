/*
É muito comum alterar CSS com JavaScript também;
As regras de CSS ficam de forma inline;
Substituindo a maioria das outras regras criadas;
*/
// seleciona elemento
var title = document.querySelector("#title");

// adiciona o estilo // cuidado esse metodo substitui o estilo do css
title.style.color = "red";

// background-color
title.style.backgroundColor = "yellow";

// selecionar elemento
var subtitle = document.querySelector(".subtitle");

// adicionar varios estilos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px";