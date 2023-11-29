let firstNumber = prompt ('Digite o primeiro número.')
let secondNumber = prompt ('Digite o segundo número.')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const div = firstNumber / secondNumber
const mult = firstNumber * secondNumber
const rest = firstNumber % secondNumber
const resSum = sum % 2

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A divisão dos dois números é: ' + div)
alert('A multiplicação dos dois números é: ' + mult)
alert('O resto da divisão dos dois números é: ' + rest)

if (firstNumber === secondNumber) {
  alert('Os números são iguais.')
}

if (firstNumber != secondNumber) {
  alert('Os números são diferentes.')
}

if (resSum === 0) {
  alert('O resulta da soma é um número par.')
}
else {
  alert('O resultado da soma é um número ímpar.')
}
