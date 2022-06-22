/*
Podemos também resgatar um conjunto de elementos com os métodos;
Identificar o índice de um elemento específico e muito mais;
*/

// splice - permite adicionar elementos no meio do array
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); // o inici escolhe o index, o meio remove e o final adiciona

console.log(arr);

arr.splice(4, 1); //para remover

console.log(arr);

// indexOf - verificar o index de um elemento

console.log(arr.indexOf(5))

// join - transformar arrays em strings
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));

// reverse- inverte os elementos de um array
console.log(arr2.reverse());