//rimo metodo
const multiplYBy2 = function (n) {
    const result = n * 2;
    return result
}
const pippo = multiplYBy2(100);
console.log(pippo);

//secondo metodo(Piu usato)
function multiplyBy3(n) {
    const result = n * 3;
    return result;
}

const paperino = multiplyBy3(5);
console.log(paperino);

//terzo, Arrow function

const multiplyBy4 = (n) => {
    const result = n * 4;
    return result;
}

const paperone = multiplyBy4(3);
console.log(paperone)

//arrow function abbreviata

const multiplyBy5 = (n) => n*5;

const gastone = multiplyBy5(5)
console.log(gastone)

//funzione con due parametri in input

function checkMultiple(a,b){
    const isMultiple = a % b === 0;
    return isMultiple;
}

const qui = checkMultiple(10,5);
console.log(qui);

const quo = checkMultiple(12,5);
console.log(quo);

//funzione di sopra ma con arrow function/ funzione Lambda
const checkMultipleLambda = (a,b) => a % b === 0;
const risultato = checkMultipleLambda(10,5);
console.log(risultato);


//funzioni con 0 argomenti
function getNow() {
    const now = new Date();
    return now;
}

const qua = getNow();
console.log(qua);

//
function logUpperCase(inputString) {
    const inputStringUpperCase = inputString.toUppercase();
    console.log(inputStringUpperCase)
}

const paperinik = logUpperCase("ciao ciao");
console.log(paperinik);
logUpperCase("viva le funzioni");
