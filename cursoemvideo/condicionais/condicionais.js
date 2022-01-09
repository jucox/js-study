// CONDICIONAIS COMPOSTAS (IF ELSE)

/*
var mediaRequerida = 7
var nota1 = 9
var nota2 = 2
var media = (nota1 + nota2) / 2

if (media >= mediaRequerida) {
    console.log('Parabéns! Você foi aprovado!')
} else {
    console.log('Que pena! Você foi reprovado.')
}
*/

// CONDICIONAIS ANINHADAS

/*
var idade = 15
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
*/

/*
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas. `)
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
*/

// CONDICIONAIS MÚLTIPLAS

/*
var agora = new Date()
var diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] DIA INVÁLIDO!')
        break
}
*/