/*
String é o tipo de dado para textos;
As strings podem ser escritas com aspas simples e duplas;
Um número entre aspas pode ser considerado uma string;
É possível também concatenar strings com o +; concatenar é juntar;
*/

var nome = "Joao";
var sobrenome = "Augusto";
var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);
console.log(nomeCompleto);

console.log(typeof "31212");

var frase = 'esta é uma frase usando aspas simples';
console.log(frase);
console.log(typeof frase);

console.log(nome + " " + frase);

//Para escrever algo entre aspas para o usuario ou seja html use a função  document.write("Olá");
//Para usar aspas dentro da string é só usar aspas diferentes;

document.write('Ele disse: "Olá"');

console.log("Este numero: " + nome); //irá concatenar do mesmo jeito pois irá virar texto

