/*
São instruções que podem determinar o fluxo de uma aplicação;
Amplamente utilizados, deixam os softwares dinâmicos;
Exemplos são: if, else if, else;
*/
//Dentro do () fica a condição que sera avaliada, caso a condição de true o ccódigo será executado;
//o {} é o bloco de códigos que serão executados

var idade = 19;
var idadeMinima = 18;

console.log("Antes do if");

if(idadeMinima > 18) {
    console.log("Pode fazer a carteira de habilitação");
}

if(idade > 16){
    console.log("Não pode tirar a carteira")
}
console.log("Depois do if");