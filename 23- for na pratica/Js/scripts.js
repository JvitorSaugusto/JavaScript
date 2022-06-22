var lista = ['Laranja', 'Maçã', 'Pera', 'Banana', 'Limão' ]
//criando o elemento do DOM e é chamado de ul
var listaUl = document.createElement('ul');
//Para acessar o body pegando todos os elementos com a tag body
var body = document.getElementsByTagName('body');

//console.log(body[0]);
//inserindo a lista do body
body[0].appendChild(listaUl);
//adicionando itens na lista
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
//criando li
    var liFor = document.createElement('li');
//adicionando o texto dentro da li; texto é considerado como elemento
    var textoLi = document.createTextNode(lista[i]);
//adicionando o texto dentro do li
    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}