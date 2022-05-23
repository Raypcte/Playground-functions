// Desafio 1
function compareTrue(bolo, chocolate) {
  // seu código aqui

  // Se o bolo é true e chocolate e true retorna true.
  // Se bolo ou chocolate for falso retorna false.
  if (bolo === true && chocolate === true) {
    return true;
  }
  if (bolo === false || chocolate === false) {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // Aqui calcula a área do triangulo.
  const area = (base * height) / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(nome) {
  // seu código aqui
  // A função split vai dividir o nome pelo espaço.
  const nomeDividido = nome.split(' ');
  return nomeDividido;
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(listaDePalavras) {
  // seu código aqui
  // O parametro é um array de strings
  const primeiro = listaDePalavras[0];
  const ultimo = listaDePalavras[listaDePalavras.length - 1];
  return `${ultimo}, ${primeiro}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // Wins é 3 pontos e ties é 1 ponto.
  const totalDePontos = wins * 3 + ties;
  return totalDePontos;
}
console.log(footballPoints(5, 5));

function verificaMaiorNumero(listaDeNumeros, maiorNumero) {
  for (let index = 0; index < listaDeNumeros.length; index += 1) {
    if (listaDeNumeros[index] > maiorNumero) {
      maiorNumero = listaDeNumeros[index];
    }
  }
  return maiorNumero;
}

// Desafio 6
function highestCount(listaDeNumeros) {
  // seu código aqui
  // Retornar a quantidade de vezes do maior número.
  // Meta 1: Descobrir o maior número do Array
  // Meta 2:  Verificar quantas vezes o maior número se repete.
  let maiorNumero = listaDeNumeros[0];
  let contador = 0;
  maiorNumero = verificaMaiorNumero(listaDeNumeros, maiorNumero);
  for (let index = 0; index < listaDeNumeros.length; index += 1) {
    if (listaDeNumeros[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(Jerry, Tom, Joel) {
  // seu código aqui
  const caçaJoel = Math.abs(Joel) - Math.abs(Jerry);
  const caçaTom = Math.abs(Tom) - Math.abs(Jerry);
  if (caçaJoel < caçaTom) {
    return 'cat2';
  }
  if (Math.abs(caçaTom) < caçaJoel) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));

function comparaDivisaoPorTresECinco(listaDePalavras, listaDeNumeros, index) {
  if (
    listaDeNumeros[index] % 3 === 0
    && listaDeNumeros[index] % 5 === 0
  ) {
    listaDePalavras.push('fizzBuzz');
  } else if (listaDeNumeros[index] % 5 === 0) {
    listaDePalavras.push('buzz');
  } else if (listaDeNumeros[index] % 3 === 0) {
    listaDePalavras.push('fizz');
  }
}

// Desafio 8
function fizzBuzz(listaDeNumeros) {
  // seu código aqui
  let listaDePalavras = [];
  for (let index = 0; index < listaDeNumeros.length; index += 1) {
    if (listaDeNumeros[index] % 3 !== 0 && listaDeNumeros[index] % 5 !== 0) {
      listaDePalavras.push('bug!');
    } else {
      comparaDivisaoPorTresECinco(listaDePalavras, listaDeNumeros, index);
    }
  }
  return listaDePalavras;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
