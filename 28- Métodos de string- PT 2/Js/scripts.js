/*
Os métodos de string também auxiliam na sua modificação;
Podemos por exemplo deixar a fonte em caixa alta ou baixa com JS;
*/

// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

// trim 
// ex: um usuario mandou o nome errado com varios espaços

var nome = "          João      ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split - transformar texto em array ou ao contrario

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// LastIndexOf

var fraseDois = "Eu quero a última palavra teste dessa frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));