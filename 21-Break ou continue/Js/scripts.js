/*
Com break podemos encerrar uma instrução;
Com o continue podemos pular uma instrução;
Utilizados na maioria das vezes em loops;
*/

for(var i = 10; i > 0; i --) {

    console.log(i);

    if(i === 5){
        break;
    }
}

console.log ("Deu o break");


//O CONTINUE somente pula uma execução do código passando para a seguinte;
var x = 10;

while(x < 100) {
    x += 10;

    if(x === 60 || x === 90){
        console.log("CONTINUE");
        continue;
    }

    console.log("Testando continue" + x);
}

