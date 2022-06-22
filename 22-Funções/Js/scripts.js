/*
Funções são blocos de códigos reutilizaveis;
Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
A funçao precisa ser invocada para ser executada;
*/

function primeiraFuncao(){

    console.log("Hello world das funções");
}

//Invocação de função
primeiraFuncao();

function dizerNome(nome) {

    console.log("O nome é: " + nome);
}

dizerNome("João");
dizerNome("Matheus");
dizerNome("Lucas");

var nomeDoBancoDeDados = "Xaver";

dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

// explicação retorno: pegamos os parametros na function soma a, b da função;
// Ao rodar eles (var somaDois= soma (5, 5)) o return me retorna a junção dos 2;
// O soma em amarelo na vdd é o returno que vai permitir que os valores digitados se somem;
var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma (5, 5);

console.log(somaDois);

console.log(soma(4, 5));