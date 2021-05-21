//6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let diasemana = "Sexta"

switch (diasemana) {
    case 'domingo', 'Domingo':
        console.log(1)
        break
    case 'segunda' , 'Segunda':
        console.log(2)
        break
    case 'terça', 'Terça':
        console.log(3)
        break
    case 'quarta', 'Quarta':
        console.log(4)
        break
    case 'quinta', 'Quinta':
        console.log(5)
        break
    case 'sexta' , 'Sexta':
        console.log(6)
        break
    case 'sabado', 'Sabado':
        console.log(7)
        break
    default:
        console.log('digite um dia válido!')
}