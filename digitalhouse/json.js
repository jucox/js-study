let pessoa = {
    nome: "Renato",
    sobrenome: "Junior",
    idade: 19,
    profissão: "Aprendiz",
    casado: false
}

let json = JSON.stringify(pessoa.nome && pessoa.sobrenome);

console.log(json)
