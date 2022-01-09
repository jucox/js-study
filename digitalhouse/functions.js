/*var saudacao = function(){
    return "E aí parceiro!"
}

console.log(saudacao)

let arredondado = Math.round(234.897)
console.log(arredondado)

if(!(10>15) || 10 != 20){
    console.log(true)
}else{
    console.log(false)
}*/

/*var nome = 'Renato'
var sobrenome = 'Dunco'

function listarNome(nome, sobrenome){
    var nomeCompleto = nome + " " + sobrenome
    console.log(nomeCompleto)
}

listarNome(nome, sobrenome)*/

/* function tabuadaDoSete(){
    for(var i=1;i<11;i++){
        console.log("7 x " + i + " = " + 7*i)
    }
}

tabuadaDoSete() */

var palavras = ["Amor", "copo", "Bolacha", "biscoito"];

 
function comecaComMaiuscula(palavras){
  return /^[A-Z]/.test(palavras)
}

for(var i=0; i<palavras.length; i++){
  if (palavras[i] == comecaComMaiuscula(palavras)){
     console.log('Começa com maiúscula')
  } else ('Não começa com maiúscula')
}