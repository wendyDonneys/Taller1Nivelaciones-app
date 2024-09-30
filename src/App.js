// obtengo el primer número , ejecutó un bucle si es menor a 100
let firstNumber = parseInt(prompt(' > a 100):'));
while (firstNumber <= 100) {
  firstNumber = parseInt(prompt(' < a 100, Intenta otro: '));
}

// Obtengo el segundo número , ejecutó un bucle mientras no /5
let secondNumber = parseInt(prompt('segundo número (/ 5):'));
while (secondNumber % 5 !== 0) {
  secondNumber = parseInt(prompt('/ 5, Ingresa otro: '));
}

// obtengo el tercer número, ejecutó un bucle, mientras (1² + 2)
let thirdNumber = parseInt(prompt('Tercer Número 1²+2 ):'));
while (thirdNumber !== (2 * firstNumber + secondNumber)) {
  thirdNumber = parseInt(prompt('Eror, Ingresa otro: '));
}

alert('¡Lo lograste!');
