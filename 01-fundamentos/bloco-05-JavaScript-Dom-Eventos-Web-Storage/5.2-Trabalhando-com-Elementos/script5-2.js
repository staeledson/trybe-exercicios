//Step 1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let tagH1 = document.createElement('h1');
tagH1.innerText = "Exercício 5.2 - JavaScript";
document.body.appendChild(tagH1);

//Step 2 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//Step 3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//Step 4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p');
tagSection.appendChild(tagP);
tagP.innerText = "Algum texto qualquer";

//Step 5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let tagSecionleft = document.createElement('section');
tagSecionleft.className = 'left-content';
tagMain.appendChild(tagSecionleft);

//Step 6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let tagSecionRight = document.createElement('section');
tagSecionleft.className = 'right-content';
tagMain.appendChild(tagSecionRight);

//Step 7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let imgFoto = document.createElement('img');
imgFoto.src = 'https://picsum.photos/200';
imgFoto.className = 'small-image';
tagSecionleft.appendChild(imgFoto);

//Step 8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaNumerosExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let listaUl = document.createElement('ul');
tagSecionRight.appendChild(listaUl);
for (let n in listaNumerosExtenso) {
    let itemLi = document.createElement('li');
    itemLi.innerHTML =  listaNumerosExtenso[n];
    listaUl.appendChild(itemLi);
}

//Step 9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

