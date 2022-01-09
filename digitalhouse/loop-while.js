//WHILE
let contador = 0;

while(contador < 10){
    console.log("Estou dentro de um while");
    contador++;
}

//DO WHILE
let contador2 = 0

do{
    console.log("Isto é um do while");
    contador2++;
} while (contador2 < 10)

//FOR IN

var pessoa = {
    nome: 'João',
    idade: 19,
}

for (var dados in pessoa){
    console.log(pessoa[dados])
}

for (var dados in pessoa){
    console.log(dados + ": " , pessoa[dados])
}

//EXERCÍCIO
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for(var prop in bart){
    console.log(bart[prop])
}

//FOR OF

var instrumentos = ['Trompete','Bateria','Teclado','Guitarra'];

for(var musica of instrumentos){
    console.log(musica);
}