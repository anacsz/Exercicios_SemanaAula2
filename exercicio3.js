//3 - Crie um algoritmo que leia o valor de um jantar, calcule ze informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let jantar = 600
let taxa = jantar * (10/100)
const valorfinal = jantar + taxa

console.log(`Valor a ser pago: R$ ${valorfinal}`)
console.log(`O valor da taxa do Garçom: R$ ${taxa}`)