//O Callback é uma função que se passa como parâmetro em outra função

//EXEMPLO 1
function nomeCompleto (nome,sobrenome){
  return nome + ' ' + sobrenome;
}

function saudacao (nome, sobrenome, callback){
  return 'Olá ' + callback(nome,sobrenome) + '!';
}

console.log(saudacao('Darth', 'Vader', nomeCompleto));

//EXEMPLO 2
function iniciais (nome, sobrenome){
  return nome[0] + sobrenome[0];
}

console.log(saudacao('Darth', 'Vader', iniciais));

//ESSE É O EXEMPLO DE UMA ARROW FUNCTION COM CALLBACK
const somar = (numA,numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao(numA,numB);

console.log(calculadora(10,20,somar))

//EXEMPLO DE FUNÇÃO ANÔNIMA (ELA FOI DECLARADA DENTRO DO PARÂMETRO)
console.log(calculadora(10,20,(numA, numB) => numA-numB))

//EXERCICIO
function dobro (num){
  return num * 2;
}

function triplo (num){
  return num * 3;
}

function aplicar (num, callback){
  return callback(num);
}

console.log(aplicar(5, dobro));
console.log(aplicar(5, triplo));

//EXERCÍCIO 2
function soma(numeroA, numeroB){
  return numeroA + numeroB;
}

function subtracao(numeroA, numeroB){
  return numeroA - numeroB;
}

function multiplicacao(numeroA, numeroB){
  return numeroA * numeroB;
}

function divisao(numeroA, numeroB){
  return numeroA / numeroB;
}

function calculadora2 (numeroA, numeroB, callback){
  return callback(numeroA, numeroB);
}

console.log(calculadora2(30, 2, soma));

//EXERCÍCIO 3
const sites = ['site1.com','site2.com','site3.com']

function adicionarHttp(url) {
  return "http://" + url
}

function processar(lista, callback){
  var sitesComUrl = [];
  for(var i=0;i<lista.length;i++){
    sitesComUrl.push(callback(lista[i]));
  }
  return sitesComUrl;
}

console.log(processar(sites, adicionarHttp))

/*const alunos = [
    { nome: "Ana", notas: [10, 3, 4, 7, 5] },
    { nome: "Luiz", notas: [4, 6, 7, 2, 10] },
    { nome: "Mirian", notas: [3, 5, 7, 5, 3] },
    { nome: "Felipe", notas: [8, 9, 7, 8, 9] },
    { nome: "Carolina", notas: [9, 6, 5, 6, 7] },
    { nome: "Danilo", notas: [5, 7, 4, 8, 8] },
    { nome: "Rafael", notas: [10, 9, 2, 7, 5] },
  ]

    // 1 - faça uma função de calculo de média
  function calcularMedia(alunos){
      const mediaDosAlunos = alunos.map((nome) => {
          console.log(aluno)
      })
  }


  // Usando as funções de (.map, .filter, .reduce)
  // 2 - faça uma função de retorne somente os alunos com média maior que 6
  // 3 - faça uma função de adicione uma propriedade objeto aluno chamada "aprovado"
  //     a propriedade só deve ser true se a média do aluno for maior que 7
  // 4 - faça uma função que retorne a média da sala
  // 5 - faça uma função que retorne apenas os alunos com a maior média
  // 6 - faça uma função que retorne apenas os alunos com a menor média*/