/*
Nas linguagens de programção existem os operadores lógicos;
Estes operadores realizam comparações para que seja retornado um ture ou false;
Decidindo então o fluxo da aplicação;
Utilizamos principalmente nas instruções de condição e repetição, em conjunto dos operadores de comparação;
*/

/*
O operador logico && é conhecido também como AND;
Ele vai retornar true apenas se as duas expressões retornarem true;
Qualquer outro resultado o operador lógico and retornará false;
*/
var idade = 16;
var nome = "João";

if(nome == "João" && idade == 16){
    console.log("O João pode entrar na aula");
} else {
    console.log("Não é o aluno correto");
}

//É possivel adicionar varias condiçoes usando o &&

if(1==1 && 3 > 2 && true){
    console.log("passou");
}

//É possivel isolar operações tbm para ver quem vai ser lida primeiro, é util para organizar o código;

if((1==1 && 3 > 2) && true){
    console.log("passou 2");
} else if(nome === "João" && idade >=14) {
    console.log("Passou de novo");
}



