let numerosPares = [2, 4, 6, 8, 10];

//map

let dobroNumerosPares = numerosPares.map(function(numeros){
    return numeros * 2;
})

console.log(dobroNumerosPares)

//find
var frutas = ["Uva","Melão","Banana","Goiaba"]

var goiabeira = frutas.find(function(frutas){
    return frutas == "Goiaba";
})

console.log(goiabeira)

//filter
let numerosFiltrados = numerosPares.filter(function(numeros){
    return numeros < 7
})

console.log(numerosFiltrados);

let listaDeNumeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = listaDeNumeros.filter(function(numeros){
    return numeros > 18;
})

console.log(maiores);

//reduce

let somaPares = numerosPares.reduce(function(acum, numeros){
    return  acum + numeros 
})

console.log(somaPares);

//forEach

numerosPares.forEach(function(numeros, indice){
    console.log("O indice " + indice + " tem o valor: " + numeros)
})