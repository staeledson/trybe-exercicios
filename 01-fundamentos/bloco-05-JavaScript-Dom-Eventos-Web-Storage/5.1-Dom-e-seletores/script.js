/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function changeTag() {
   let texto = document.getElementsByTagName('p')[1];
   texto.innerHTML = "Estar trabalhando na área de DEV, com um bom salário.";

 }

 changeTag();

 function changeColor() {
    let colorQuad = document.getElementsByClassName('main-content')[0];
    colorQuad.style.background = "rgb(76,164,109)";

 }

 changeColor();

 function changeCenterBlock() {
       let centerBlock = document.getElementsByClassName('center-content')[0];
       centerBlock.style.background = "white";
 }

 changeCenterBlock();

 function corrigirH1() {
       let tagParaCorrigir = document.getElementsByClassName('title')[0];
       tagParaCorrigir.innerHTML = "Exercício 5.1 - JavaScript";
 }

 corrigirH1();

 function changeToUpper() {
       let tagP = document.getElementsByTagName('p')[0];
       tagP.innerHTML = tagP.textContent.toUpperCase();
       
 }

 changeToUpper();

 function logText() {
       let paragrafos = document.getElementsByTagName('p');
       for (let i= 0; i < paragrafos.length; i += 1) {
              console.log(paragrafos[i].innerHTML);

       }
 }

 logText();