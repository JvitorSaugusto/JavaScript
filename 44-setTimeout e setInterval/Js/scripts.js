/*
Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos;
Um dos argumentos destas funções é uma callback function;
ela conta em ms, 1 segundo são 1000 ms
Callback assincrona pois espera no tempo
*/

//setTimeout
console.log("Antes do setTimeout");

setTimeout(function(){

    console.log("Testando o setTimeout")
    
}, 2000);

console.log("Depois do setTimeout");

// setInterval
setInterval(function(){

    console.log("Testando setInterval");

}, 1000);