//Condicional If
const carro = "Onix"

if(carro == "Onix"){
    console.log("Vou comprar esse!")
} else {
    console.log("Quero um Onix.")
}

//Condicional If Ternário
const dia = "Domingo";

const diaDoChurrasco = dia == "Domingo" ? "É sim, vamos comer!" : "É não, é outro dia.";

console.log(diaDoChurrasco);



//Condicional Switch

const dia2 = "Sábado";

switch(dia2){
    case "Segunda":
        console.log("Vou trabalhar.");
        break; //o break é indispensável nesses casos
    case "Terça":
        console.log("Eu ainda vou trabalhar.")
        break;
    case "Sábado":
    case "Domingo":
        console.log("Hoje eu não trabalho!");
        break;
    default:
        console.log("Vou trabalhar como sempre.") //aqui não precisa do break
}