//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.

let mercadoria = 700
const taxa = mercadoria * (20/100)

let total = mercadoria - taxa
console.log(`O Preço a pagar é: ${total}`)
console.log (`O valor do desconto é:${taxa}`)