
//BASIC FUNCTION
function soma1 (num1,num2) {
    return num1 + num2
}

//ARROW FUNCTION
let soma2 = (num1,num2) => num1 + num2;

/////////////////////////////////////////////////////

//Caso a função tenha apenas 1 parâmetro, não é necessário colocá-lo entre ()
let dobro = num => num*2;

//Se a função tiver vários parâmetros, aí não tem jeito, tem que usar as chaves e o return
let par = num => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

let arrow = () => console.log("Isso é uma Arrow Function!")

arrow();
console.log(soma2(3,4));
console.log(dobro(4));
console.log(par(7));