// o unshift adiciona o nome no inicio do array
var nomeDosMeninos = ['Vitor','Guilherme','Andrey']
var nomeDeTodos = nomeDosMeninos.unshift('Renato')
console.log(nomeDosMeninos)

//o join separa os objetos do array
var filmesStarWars = ['A New Hope','The Empire Strikes Back','Return of the Jedi']
var RogueOne = filmesStarWars.unshift('Rogue One')
var filmesEmOrdem = filmesStarWars.join(' - ')
console.log(filmesEmOrdem)

//indexOf fala a posição do objeto, se não tiver é -1
console.log(filmesStarWars.indexOf('A New Hope'))
console.log(nomeDosMeninos.indexOf('Graciete'))

let nome='Joao'
console.log(nome[2])

console.log(nomeDosMeninos.split(' '))