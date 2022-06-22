//As variaveis armazenam valores; Estes valores podem ser utilizados posteriormente;
// No Js é possivel criar variaveis de 3 formas;
// Podemos mudar o tipo da variavel livremente (tipagem fraca);

var teste = 1;   //a variavel teste esta armazenando o valor 1, teste no caso se tornou o nome da variavel

var nome = "Joao";

teste = 'Matheus' //somente teste pq ja esta declarado sem a necessidade de "var";
                  // neste caso a variavel teste mudou do valor 1 para matheus; 
                  //mudar valores n tem problema porém mudar o tipo ocasiona erros.
console.log(teste);

console.log(nome);

//Não é possivel declarar variaveis com simbolos especiais, nem numeros no inicio dela, somente com $ e _

var meuPrimeiroNome = 'Matheus';    //fica melhor de separar usando as minusculas e maiusculas // o nome disso é camelCase

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;

console.log(meuNome);

meuNome = "Joao";

console.log(meuNome);

