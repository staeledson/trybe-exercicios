function calcularBmi(weigth, height) {
  const IMC = weigth / (height*height);
  return IMC;
}

console.log(`Seu IMC é: ${calcularBmi(82, 1.68)}`);
