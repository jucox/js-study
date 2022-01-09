const data = new Date();

console.log(data.getDay() + 1); //retorna o dia da semana, domingo é 0
console.log(data.getMonth() + 1); //retorna o mês, janeiro é 0
console.log(data.getFullYear()); //retorna o ano
console.log(data.getDate() + 1) //retorna o dia, dia 1 é 0


console.log(data); //retorna a data por extenso e o horario

////////////////////////////////////////////

const quandoNasci = new Date ('2001-10-22');

console.log(quandoNasci.getDay() + 1);
console.log(quandoNasci.getMonth() + 1);
console.log(quandoNasci.getFullYear());
console.log(quandoNasci.getDate() + 1)


console.log(quandoNasci); //retorna a data por extenso e o horario