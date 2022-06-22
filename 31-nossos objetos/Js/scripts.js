/*
                                         Tudo é objeto

Como você pode perceber muitos tipos de dados tem métodos e propriedades;
Podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nossos programas;
*/
let pessoa = {
    nome: "João",
    idade: 22,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);
// Essa function é um exemplo de como criar um método dentro de um objeto
pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);