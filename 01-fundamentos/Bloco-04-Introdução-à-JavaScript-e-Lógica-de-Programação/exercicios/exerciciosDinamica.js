// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no f
//ormato: A soma de 1 a 50 é: X.

let soma = 0;

for (let index = 1; index <=50; index += 1) {
 soma += index;
}
console.log('soma de 1 a 50 é: ' + soma);


// exercicio 2

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. 
//Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let count = 0;

for (let index = 2; index <= 150; index += 1) {
    if ( index % 3 == 0){
        count ++;
    }

}

if (count == 50) {
    console.log('mensagem secreta')
}

//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no 
//formato: "Pessoa" é a mais nova.

let maisNova = "";
let nat = 30;
let renan = 25;
let sincero = 29;

if (nat < renan && nat < sincero) { 
    maisNova = 'nat';
}
else if (renan < nat &&  renan < sincero) {
    maisNova = 'renan';
}
else {
    maisNova = 'nat';
}
console.log(maisNova,'é mais novo(a)')
