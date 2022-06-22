/*
Objetos
Funcionam como um array associativo de outras linguagens;
Podemons criar propriedades com chave e valor;
A ideia é guardar um conjunto de valores para utilizar posteriormente;
As informações dentro dos objetos se chama itens;
Para acessar uma propriedade no objeto deve se usar ponto
*/

var obj = {
    nome: "João",
    idade: 22,
    profissao: "Estagiario",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é" + obj.nome);

//É possivel mudar a propriedade do objeto

obj.nome = "Eloim";
console.log(obj.nome);
console.log(obj);

obj.graduacao = true; //criando um item novo fora do objeto;
console.log(obj);


