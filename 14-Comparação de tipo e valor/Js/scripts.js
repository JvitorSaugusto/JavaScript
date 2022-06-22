/*
Dois outros operadores de comparação existem no JavaScript: === e !==;
A função é comparar valor e tipo de dado;
== verifica se o valor é igual, ignorando o tipo, caso a var numero seja "5" e o if 5, era ser true
=== verifica se o tipo e valor é igual: 
exemplo string com string, caso a var numero seja "5" e o if 5, era sera false;
*/

var numero = '5';

if(numero === 5){
    console.log("O numero é 5");
}
//!== só dara true ou seja executara o codigo caso o valor ou tipo da variavel e if sejam diferentes;
if(numero !== 5){
    console.log("Não é o número 5 do tipo number");
}