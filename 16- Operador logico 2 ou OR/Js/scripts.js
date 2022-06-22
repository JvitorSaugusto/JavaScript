/*
O Operador logico || é conhecido como OR;
Ele retorna true caso uma das operações retorne verdadeiro;
O OR retorna false apenas se as duas expressões são falsas;
*/

var idade = 13;
var nome = "João";

if(nome == "João" || idade >14){
    console.log("Pode entrar na aula!")
} else {
    console.log("Não pode entrar");
}

//O código é lido da esquerda pra direita então a ultima expressão é quem conta

/*
if(nome == "Pedro" && 15 > 20 || 10 == 10){
    console.log("Testando")
}

----------------------------------------------------------------------------------
Essa n funcionara pq o AND (&&) exige que as expressões ao lado sejam true

if((nome == "Pedro" || 15 > 20) && 10 == 10){
    console.log("Testando")
} else {
    console.log("Não entrou")
}
*/


//Aqui dara true pois o OR (||) só requer que uma das expressões seja true pra gerar verdadeiro
if((nome == "Pedro" || 30 > 20) && 10 == 10){
    console.log("Testando")
} else {
    console.log("Não entrou")
}