const readline = require('readline-sync');

const weigth = readline.question('Qual seu peso em kg?: ');
const height = readline.question('Qual sua altura em m?: ');


function calcularBmi(w, h) {
  const IMC = w / (h*h);
  return IMC;
}

console.log(`Seu IMC é: ${calcularBmi(weigth, height)}`);
