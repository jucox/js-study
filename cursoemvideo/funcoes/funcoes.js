// FUNÇÕES
// São ações executadas por chamadas ou decorrência de um evento. Uma função recebe parâmetros e retorna um resultado.

function parOuImpar(n) {    // função (parâmetro)
    if(n%2 == 0){           // ação
        return 'par'        // resultado
    } else {
        return 'impar'
    }
}

let res = parOuImpar(8)    // chamada
console.log(res)           // 'par'

// Função com parâmetros pré-definidos

function soma(n1=0, n2=0) {
    return n1 + n2
}

let res1 = soma(7, 5)
console.log(res1)      // 7 + 5 = 12

let res2 = soma(7)
console.log(res2)      // 7 + 0 = 7

// Função dentro de uma variável

let v = function(x) {
    return x*2
}

console.log(v(5))      // 10

// Função de fatorial

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) // 120

// Função de fatorial com Recursividade (uma função dentro da mesma)

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n-1) // n * (n-1)!
    }
}

console.log(fatorial2(3)) // 6