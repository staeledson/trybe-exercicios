// Requisito 1
function compareTrue(param1, param2) {
    if (param1 && param2) {
        return true;
    } else {
        return false;
    }

}


// Requisito 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return area;
}


// Requisito 3
function splitSentence(frase) {
    let fraseRetorno = frase.split(' ');
    return fraseRetorno;
}


// Requisito 4
function concatName(strings) {
    let stringRetorno = "";
    let ultimoItem = ""
    let primeiroItem = "";

    for (let iterador in strings) {

        if (iterador == 0) {
            primeiroItem = strings[iterador];
        }
        if (iterador < strings.length) {
            ultimoItem = strings[iterador];
        }
    }

    stringRetorno = ultimoItem + ', ' + primeiroItem;

    return stringRetorno;
}


// Requisito 5
function footballPoints(wins, ties) {
    let vitorias = wins * 3;
    let empates = ties;

    let pontos = vitorias + empates;

    return pontos;
}
//console.log(footballPoints(14, 8));


// Requisito 6
function highestCount(numeros) {
    let maiorNumero = Math.max.apply(null, numeros);
    let count = 0;

    for (const iterator of numeros) {
        if (iterator == maiorNumero) {
            count += 1;
        }

    }
    return count;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Requisito 7
function catAndMouse(mouse, cat1, cat2) {
    let distanciaCat1 = mouse - cat1;
    let distanciaCat2 = mouse - cat2;


    if (distanciaCat1 == distanciaCat2) {
        return ('os gatos trombam e o rato foge');

    } else {
        if (distanciaCat1 < distanciaCat2) {
            return 'cat1';
        } else {
            return 'cat2';
        }
    }
}
//console.log(catAndMouse(20, 14, 14));


// Requisito 8
function fizzBuzz(numeros) {

    let retorno8 = [];

    for (let valor of numeros) {

        if (valor % 3 == 0 && valor % 5 != 0) {
            retorno8.push('fizz');
        } else if (valor % 3 != 0 && valor % 5 == 0) {
            retorno8.push('buzz');
        } else if (valor % 3 == 0 && valor % 5 == 0) {
            retorno8.push('fizzBuzz');
        } else {
            retorno8.push('bug!');
        }
    }
    return retorno8;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Requisito 9
function encode(string) {
    let encodeString = "";

    for (const letra of string) {
        switch (letra) {
            case 'a' :
                encodeString += 1;
                break;
            case 'e' :
                encodeString += 2;
                break;
            case 'i' :
                encodeString += 3;
                break;
            case 'o' :
                encodeString += 4;
                break;
            case 'u' :
                encodeString += 5;
                break;

            default:
                encodeString += letra;
                break;
        }
    }
    return encodeString;

}
//console.log(encode('hi there!'));

function decode(string) {
    let decodeString = "";

    for (const letra of string) {
        switch (letra) {
            case '1' :
                decodeString += 'a';
                break;
            case '2' :
                decodeString += 'e';
                break;
            case '3' :
                decodeString += 'i';
                break;
            case '4' :
                decodeString += 'o';
                break;
            case '5' :
                decodeString += 'u';
                break;

            default:
                decodeString += letra;
                break;
        }
    }
    return decodeString;

}
//console.log(decode("h3 th2r2!"));


// Requisito 10
function listTec(arrayRe, name) {
    let saida = [];
    if (arrayRe != "") {
        for (let tech of arrayRe){
            saida.push({'tech': tech, 'name': name });
        }
        return saida;
    }else {
        return 'Vazio!';
    }
}

let entraarray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let entraName = "Lucas";
//console.log(listTec(entraarray, entraName));


// Requisito 11

function generatePhoneNumber(array) {
    if(array.length == 11) {
        





    } else {
        return 'Array com tamanho incorreto.';
    }
}


