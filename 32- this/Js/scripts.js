/*
Fora de escopos locais o this sempre se refere ao objeto global Windows;
Em objetos o this vai se referir a instância e pode acessar suas propriedades;
*/

var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "João",
    idade: 22,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    dizerNome: function(){
        console.log("O nome é " + this.nome)
    },
    aniversario: function(){
        this.idade +=1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

//this faz isso, exibir valor de uma propriedade ou alterar este valor;

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);