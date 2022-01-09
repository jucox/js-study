//SPREAD OPERATOR

let frutas = ["Maçã", "Banana", "Uva", "Melão"];
let bebidas = ["Leite", "Café", "Refrigerante", "Suco"];

let listaCompras = [...frutas, ...bebidas];

console.log(listaCompras);

let pessoa = {
    nome: "Renato",
    idade: 19,
    sexo: "Masculino",
}

let infoPessoal = {
    numeroRG: 324124321,
    numeroCPF: 832691832,
    numeroTelefone: 2276329064,
    ...pessoa
}

let outrosDados = {
    endereco: "Rua blabla",
    numero: 87,
    bairro: "ajfamlc",
    ...pessoa,
    ...infoPessoal
}

console.log(outrosDados)

function letras(...parametros){
    console.log(parametros)
}

letras("A", "B", "C")