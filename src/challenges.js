// Desafio 1
function compareTrue(bolo, chocolate) {
  // seu código aqui

  // Se o bolo é true e chocolate e true retorna true.
  // Se bolo ou chocolate for falso retorna false.
  if (bolo === true && chocolate === true) {
    return true;
  } if (bolo === false || chocolate === false) {
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
  const nomeDividido = nome.split(" ");
  return nomeDividido;
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
