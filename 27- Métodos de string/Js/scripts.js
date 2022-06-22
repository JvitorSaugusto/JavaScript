/*
O objeto String também possui métodos muito uteis;
Que vão nos auxiliar a manusear textos nos nossos softwares;
*/

// Lenght - vai dar a quantidade de caracteres de uma frase

var nome = "João";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf - vai me dar um caractere pelo indice da palavra

var frase = "O rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu"));

//slice - extrai uma parte da frase

var roeu = frase.slice(7, 11);

console.log(roeu);

// replace - troca uma palavra por outra

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);