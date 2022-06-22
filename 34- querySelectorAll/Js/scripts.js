/*
                           Outras formas de acessar o DOM
Com a evolução da linguagem foram criados dois seletores que acabaram com toda a complexidade desta ação;
querySelector e querySelectorAll;
Com estes podemos acessar os elementos baseados em regras de CSS;
*/

// O problema em utilizar a getElementsByClassName('item'); é que ela n vai pegar um item especifico e sim todos;
// Ja o querySelectorAll permite algo mais especifico

var itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);

// querySelectorAll

var itensQuery = document.querySelectorAll('#lista 2 li');

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector - aqui ele vai buscar somente um elemento

var lista = document.querySelector('#lista');

console.log(lista);

var primeiraLista = document.querySelector('ul')

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span)