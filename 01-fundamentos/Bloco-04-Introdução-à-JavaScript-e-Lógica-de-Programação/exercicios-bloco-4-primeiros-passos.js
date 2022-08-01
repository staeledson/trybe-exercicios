// exercicios dia 1

//Exercicio 1
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas 
//constantes, a e b, definidas no começo com os valores que serão operados. 
//Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 12;
let b = 8;
let soma = (a + b);
let sub = a - b;
let mult = a * b;
let div = a / b;
let modulo = a % b;

console.log('A soma dos números é:', soma);
console.log('A subtração dos números é:', sub);
console.log('A multiplicação dos números é:', mult);
console.log('A divisão dos números é:', div);
console.log('o módulo dos números é:', modulo);


//Exercicio 2
//Faça um programa que retorne o maior de dois números. Defina no começo do programa 
//duas constantes com os valores que serão comparados.

maior = Math.max(a, b)
console.log('o maior dos números é:', maior);

//Exercicio 3
//Faça um programa que retorne o maior de três números. Defina no começo do programa 
//três constantes com os valores que serão comparados.

let c = 26;

maiordos3 = Math.max(a, b, c)
console.log('o maior dos números é:', maiordos3);

//Exercicio 4
//Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse 
// valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem 
// negativo retorne "zero".

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//Exercicio 5
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um 
// triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso 
// contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 30;
let anguloB = 60;
let anguloC = 90;

somaDosAngulos = (anguloA + anguloB + anguloC);

if (somaDosAngulos == 180) {
    console.log('true');
} else {
    console.log('false');
}


//Exercicio 6
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
//que ela faz.

let nomeDaPeca = 'cavAlo';

nomeDaPeca = nomeDaPeca.toLowerCase();

switch (nomeDaPeca) {
    case 'rei':
        console.log(nomeDaPeca, 'Move-se em qualquer direção. 1 casa por vez');
        break;
    case 'rainha':
        console.log(nomeDaPeca, 'Move-se em qualquer direção. Quantas casas quiser');
        break;
    case 'bispo':
        console.log(nomeDaPeca, 'Move-se em diagonal. Quantas casas quiser');
        break;
    case 'torre':
        console.log(nomeDaPeca, 'Move-se em linha reta vertical ou horizontal. Quantas casas quiser');
        break;
    case 'cavalo':
        console.log(nomeDaPeca, 'Move-se em "L".');
        break;
    case 'peão':
        console.log(nomeDaPeca, 'Move-se sempre para frente. 1 casa por vez');
        break;

}

//Exercicio 7

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de 
//A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor 
// que 0 ou maior que 100.

let nota = 83;
let notaConvertida = '-';

if (nota >= 90) {
    notaConvertida = 'A';

}else if (nota >= 80) {
    notaConvertida = 'B';

}else if (nota >= 70) {
    notaConvertida = 'C';

}else if (nota >= 60) {
    notaConvertida = 'D';

}else if (nota >= 50) {
    notaConvertida = 'E';

}else if (nota < 50) {
    notaConvertida = 'F';

}

if(nota => 0 && nota <= 100){
    console.log('A nota do aluno é: ', notaConvertida);
}else{
    console.log('nota inválida');
}

