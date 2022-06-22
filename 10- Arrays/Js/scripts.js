/*
Arrays
Na verdade os arrays são considerados objetos em JavaScript, porém serve como listas;
Podemos ter itens de qualquer tipo de dado também;
Porém não por chave e valor, e sim por índice;
*/

var arr = [5, "João", true, {teste: 1, tese:2}]; //Arrays = []  Objects = {};

console.log(arr);

var arr2= [2, 3, 4, 5];

console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]); //A contagem dentro do array se inicia pelo 0;

arr2[4] = 6;  //Assim q se adiciona mais itens ao array, declare a proxima posição que ainda n existe;
arr2[0] = "Mudança";
console.log(arr2);

console.log(typeof arr);
