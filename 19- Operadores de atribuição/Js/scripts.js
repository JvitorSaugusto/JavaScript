/*
Temos algumas maneiras de atribuir um valor a uma variavel;
As mais utilizadas são: +-, -=, *=, /=;
Basicamente é uma forma resumida da operação: x=x+y;
Em loops também é comum utilizar os operadores ++ ou --;
*/

var x =1;
var y =2;

//soma
console.log(x = x + y);
console.log(x +=y);

//subtração
console.log(x -= y);

//multiplicação
console.log(x *= y);

//divisão
console.log(x /= y);

//loop
console.log(x++);
console.log(x--);

while(x <= 100){
    console.log(x)
    x*=2;
}

var j = 5;

while(x > 0){
    console.log(x);

    x -=JSON;
}