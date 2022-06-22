/*
Estast estruturas servem para repetir n vezes uma operação;
Por exemplo: repetir uma determinada lógica em cada elemento de um array;
As estruturas mais comiuns são: while e for;
Obs: tomar cuidado com o loop infinito

Estrutura while

O while é a estrutura de repetição mais simples do JavaScript;
A ideia é que se repita algo até atingir tal condição;
While --> Enquanto;
A repetição começa pelo numero 0;
*/

var x = 0;

while(x < 5){

    console.log("Testando repetição" + x);

    //incrementador: significa que cada vez que o x passar, seu valor sera aumentado em 1;
    x++;
}

//Usando while para passar todos os itens de um array; acessando o indice do array com a variavel Y: arr[y];

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <=3){
    console.log(arr[y]);

    y++;
}

//Passando cada letra pelo while; Geralmente se utiliza a letra i pois o nome da função é incrementador

var palavra = "Matehus";
var i = 0;

while(i <=6){
    console.log(palavra[i]);

i +=1;
}