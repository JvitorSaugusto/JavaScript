/*
Os arrays também possuem métodos;
Facilitando a nossa vida para: adicionar e remover elementos, resgatar apenas uma parte do array e etc;
*/

// lenght- vai te dar o numero de elementos no array
var arr = [1,2,3,4,5];

console.log(arr.lenght);

//push - Adiciona elementos no array
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop - remove um elemento no fim do array
arr.pop
console.log(arr);

// unshift - adiciona um elemento no inicio do array
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift - remove um elemento do inicio do array
arr.shift();

console.log(arr);

// acessar o último elemento do array
console.log(arr[arr.length - 1]);    //menos 1

// isArray - verifica se é um array ou não
console.log(Array.isArray(5));
console.log(Array.isArray(arr));
