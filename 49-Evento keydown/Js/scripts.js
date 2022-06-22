/*
O evento keydown é ativado quando uma tecla é pressionada;
Podemos também atrelar o evento keyup para quando uma tecla volta a posição normal;
*/

document.addEventListener("keydown", function(event){

     console.log(event.key);

     if(event.key === "Enter"){
          console.log("Apertou Enter");
     }

});

// keyup
document.addEventListener("keyup", function(event){

     if(event.key === "Enter"){
          console.log("soltou o Enter");
     }
});