/*
No JavaScript podemos ter vários escopos;
O global, que é inicado em toda a aplicação;
E os locais, que podem existir em várias instruções como as funções;
*/

var x = 1;

var y = 3;

console.log(x, y);

function teste(){

    var z = 0;

    console.log(z);

    console.log(x);
}

teste();

function testando(){

    var z = 5;

    console.log(z);
}

testando();

if(true){

    var p =1;
}

console.log(p);

//Estruturas como if, for, while também são de escopo global;