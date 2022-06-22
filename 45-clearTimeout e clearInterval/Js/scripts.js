/*
Podemos por um fim em setTimeout e setInterval por meio destes dois métodos;
Então após determinada condição os timers não serão mais executados;
*/

// clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function() {
    console.log("O x é 0");
}, 1500);

x = 5;
// se x for maior que zero o clearTimeout será executado;
if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearInterval na prática
var myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function(){

    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);