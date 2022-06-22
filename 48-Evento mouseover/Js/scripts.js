/*
O mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento;
Temos também o evento mouseout que é quando o ponteiro sai do elemento;
*/

// evento de mouseover
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

     this.style.backgroundColor = "yellow";

});

// evento mouseout
title.addEventListener("mouseout", function(){

     this.style.backgroundColor = "white";

});

// afetar outro elemento com mouseover
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

     var legenda = document.querySelector("#legenda");

     legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function(){

     var legenda = document.querySelector("#legenda");

     legenda.classList.add("hide");
});

// simplificado: serve pra esconder e mostrar um elemento no site, tipo um menu flutuante