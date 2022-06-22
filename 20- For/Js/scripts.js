/*
O for tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores;
Apesar de parecer mais dificil, como a instrução fica toda em uma linha proporciona maior controle;
*/

for(var i = 0; i < 10; i++){
    console.log("Repetindo for: " + i);
}

//Numero de elementos no array: arr.length;
//Seguir a logica de 1-declarar a variavel; 2-Declarar a condição; 3- Colocar a atribuição;

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
    console.log("Itens do array: " + arr[j]);
}

for(var x = 5; x < 100; x *= 3){
    console.log(x);
}