//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.


let qtdKM = 35
let qtdDias = 6

const valorDia = 60.00
const valorKM = 0.15

const ValorFinalDias = qtdDias * valorDia
const valorFinalKM = qtdKM * valorKM
const valortotal = ValorFinalDias + valorFinalKM

console.log(`O Valor por Dia é de: R$ ${ValorFinalDias}`)
console.log(`O Valor por KM é de: R$ ${valorFinalKM}`)
console.log(`O Valor Total a Pagar é de: R$ ${valortotal}`)