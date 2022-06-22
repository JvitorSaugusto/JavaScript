/*
Por meio de JavaScript podemos mapear algumas ações dos usuários, que chamamos de eventos;
Como: movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento da página e etc;
E então criar comportamento interessante como: animação de menu abrindo e fechando;


Evento onload

O onload é ativado ao carregar a página;
Podemos depois desse evento realizar aguma ação no nosso projeto;
atrelando eventos ao carregamento do dom
*/

window.onload = function() {

     console.log("Carregou o DOM");

     var title = document.querySelector("#title");

console.log(title2);
}

console.log("Carregou o JS");
// dara null 
var title = document.querySelector("#title");

console.log(title);