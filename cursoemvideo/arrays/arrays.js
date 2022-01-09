// VARIÁVEIS COMPOSTAS
// São aquelas que armazenam vários valores em uma mesma estrutura.

// ARRAYS (vetores)
let num = [5, 8, 4, 7, 6, 3, 4]

// Funções com Arrays
num.length     // Calcula o número de valores dentro de um array
num[1] = 6     // Substitui o valor da posição indicada
num.push(7)    // Acrescenta um valor no final do array
num.indexOf(3) // Encontra a posição do valor indicado dentro do array
num.sort()     // Coloca os valores em ordem crescente

// Para que os números do array sejam representados de forma isolada:

// ESTRUTURA FOR
for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}


// ESTRUTURA FOR IN
for (let c in num) {
    console.log(num[c])
}