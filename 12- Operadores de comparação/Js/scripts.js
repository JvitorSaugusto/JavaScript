/*
São comumenete utilizados para verificação nas estruturas de condição;
Temos os seguintes operadores: ==, !=,>,<,>=,<=
A partir de uma expressão de comparação podemos obter um true ou false;
*/
var idade = 18;
var possuiCarro = 0;

if(idade >= 18) {
    console.log("Pode tirar carteira de habilitação");
}

if(idade <= 17) {
    console.log("Não pode tirar a carteira de Habilitação");
}

if(possuiCarro) {
    console.log("Já pode andar de carro");
}
/*
EXPLICAÇÃO 1
var nome = "João";
//Se vc usar somente um = é como se vc estivesse atribuindo um valor;
//Por isso se usa o == para realmente significar igualdade e evitar erros futuros;
if(nome= "João"){
    console.log("O seu nome é João");
}
*/

var nome = "João";

if(nome== "João"){
    console.log("O seu nome é João");
}

//!= significa diferente
if(nome!= "marco"){
    console.log("O nome não é marco");
}

if(20 > 10) {
    console.log("passou");
}

if(10< 20){
    console.log("passou 2")
}

