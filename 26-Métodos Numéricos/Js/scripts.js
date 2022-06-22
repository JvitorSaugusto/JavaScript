/*
O objeto Number, pai dos números, contém métodos muito úteis para trabalhar com números em JS;
A maioria dos tipos de dado também tem um objeto pai, como: String, Object e Array;
*/

//parseFloat 10.0 - Vai pegar um valor e transformar em float

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//parseInt - transforma em um inteiro

console.log(parseInt('10'));
console.log(parseInt(16.96));

//toFixed - limita a casa decimal dos números

console.log(23.51515165.toFixed(1));

//isNaN - verifica se é realmente um número

console.log(isNan("teste"));
console.log(isNaN(12));
console.log(isNan("14"));

// MAX_VALUE e MIN_VALUE - Números maximos ou minimos que o JS aceita sem dar infinito

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);