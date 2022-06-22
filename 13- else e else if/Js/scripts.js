/*
Caso a instrução de if seja negativa, podemos adicionar else;
Que será a outra condicional a ser executada;
Podemos então criar uma bifurcação no código;
Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco no código;
Se nao quiser que algo seja executado caso o if de false, não coloque nada;
Para adicionar um else if, tem que ser depois do if e antes do else;
*/

//IF:       ficou assim: (if) Se o nome for (==) igual a pedro---imprima console.log; 
//ELSE IF:  (else) se não execute: (if) Se nome for (==)igual a joão----imprima o proximo console.log; 
//ELSE:     (else)se não imprima o ultimo console.log; 

var nome = "João";

if(nome == "Pedro"){
    console.log("O nome dele é pedro");
} else if(nome == "João"){ 
    console.log("O nome dele é João");
}else {
    console.log("Ele possui outro nome");
}

//É possivel montar uma estrutura usando somente else if, sem else

var idade = 19;

if(idade >= 20){
    console.log("Pode entrar na festa!!!");
}  else if(idade >= 18){
    console.log("Entrada somente com autorização!!!");
}

if(nome == "Carlos"){
    console.log("teste");
}else {console.log("teste 2");
}


