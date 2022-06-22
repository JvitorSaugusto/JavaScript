/*
Podemos alterar o texto de qualquer elemento de forma fácil com JavaScript;
Posteriormente poderemos atrelar esta ação com algum evento;
*/

// o primeiro passo é selecionar o elemento
var title = document.querySelector("#title");

// Essas são as 2 formas de alterar o texto do html

// innerHTML - vai alterar o texto ao apertar o F5
title.innerHTML = "Testando o texto alterado!";

// textContent --> mais utilizado, recomendado e performático;
var subtitle = document.querySelector(".subtitle");  //Usamos o . pois o elemento esta por classe no html;

console.log(subtitle);

subtitle.textContent = "Testando o textoContent";