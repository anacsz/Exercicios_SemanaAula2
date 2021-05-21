//10 - Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = 1988
let resultado = 2021 - anoNascimento

if(resultado >= 18)
{
    console.log(`Bem vindo a Maioridade !!!`)
}
else if(resultado < 18)
{
    console.log(`Desculpe você ainda não largou as fraldas !!! Vou ligar para sua mâe`)
}