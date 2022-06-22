/*
Documento Object Model;
Uma interface de programação para HTML;
Por meio dele temos métodos para acessar a árvore de elementos;
O DOM fornece uma cópia do HTML;
Podemos manipular eventos pelo DOM para afetar o HTML;


Acessar o DOM caracteriza-se por identificar um elemnto do HTML através de Métodos;
Depois podemons manipulá-los da forma que quisermos;
Acessa o DOM é semelhante as regras de CSS;
Podemons acessar por: tags, ids, classes;
*/

// tag
var titulo = document.getElementsByTagName('h1')[0]; //pegando elementos por nome da tag; para pegar o primeiro insira 0;

console.log(titulo);

var lis = doocument.getElementsByTagName('li');

console.log(lis); // sem o [] vai apareceo conjuto html inteiro;

// id - é singular pois id é algo unico ao invés da tag
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class - também é por conjunto mas dividio por classes, então é mais especifico que as tags
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);