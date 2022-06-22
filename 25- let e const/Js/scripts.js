/*
Utilizando let e const podemos criar escopo té em instruções como if;
Deixando o código mais confiavel;
Separando cada bloco em um escopo;
*/

let x = 5;

const y = 10;

y = 12; //Dará erro, pois const não permite troca de valores;

x = 12;

console.log(x);

console.log('const ' + y);

if(true){

    let x = 20;

    console.log(x);

    const y = 50;

    console.log('const if ' + y);
}

console.log(x);

if(20 > 10){

    const y = 100;

    console.log('const if 3 ' + y);
}

for(let x = 0; x < 10; x++){
    console.log(x);
}