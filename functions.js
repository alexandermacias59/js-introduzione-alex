// //rimo metodo
// const multiplYBy2 = function (n) {
//     const result = n * 2;
//     return result
// }
// const pippo = multiplYBy2(100);
// console.log(pippo);

// //secondo metodo(Piu usato)
// function multiplyBy3(n) {
//     const result = n * 3;
//     return result;
// }

// const paperino = multiplyBy3(5);
// console.log(paperino);

// //terzo, Arrow function

// const multiplyBy4 = (n) => {
//     const result = n * 4;
//     return result;
// }

// const paperone = multiplyBy4(3);
// console.log(paperone)

// //arrow function abbreviata

// const multiplyBy5 = (n) => n*5;

// const gastone = multiplyBy5(5)
// console.log(gastone)

// //funzione con due parametri in input

// function checkMultiple(a,b){
//     const isMultiple = a % b === 0;
//     return isMultiple;
// }

// const qui = checkMultiple(10,5);
// console.log(qui);

// const quo = checkMultiple(12,5);
// console.log(quo);

// //funzione di sopra ma con arrow function/ funzione Lambda
// const checkMultipleLambda = (a,b) => a % b === 0;
// const risultato = checkMultipleLambda(10,5);
// console.log(risultato);


// //funzioni con 0 argomenti
// function getNow() {
//     const now = new Date();
//     return now;
// }

// const qua = getNow();
// console.log(qua);

// //
// function logUpperCase(inputString) {
//     const inputStringUpperCase = inputString.toUppercase();
//     console.log(inputStringUpperCase)
// }

// const paperinik = logUpperCase("ciao ciao");
// console.log(paperinik);
// logUpperCase("viva le funzioni");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function stringBuilder(s1,s2,s3) {
//     return s1 + s2 + s3;
// }
// console.log(stringBuilder("pippo", "leo", "nardo"));
// console.log(stringBuilder("pippo", "leo "));
// console.log(stringBuilder("pippo", "leo ", "nardo", "omar"));// i parametri aggiuntivi non vengono loggati


//////////////////////////
// function pow(base,esponente = 2){
//     // if (esponente == undefined) {
//     //     esponente = 2;
//     // }
//     return base ** esponente;
// }

// console.log(pow(3,3));
// console.log(pow(3));

///////////////////////////////////////////////////////////////// SCopes
// let number = 5;
// if (number > 3){
//     const number2 = number + 5; // lo scope interno vede le variabili dello scope esterno
//     console.log(number2);
//     if (number2 > 7) {
        
//         const number3 = number + number2;
//         console.log(number3);
//     }
// } console.log(number3);

// const number4 = number2 + 5;// lo scope esterno non accede alle variabili dello scope interno
// console.log(number3);

//////////////////////////////////////////////Clojure
// le funzioni mantengono in vita le variabili che usano amche al di fuori del loro scope

// const isOpen = true;
// let myFunction;
// if (isOpen) {
//     let counter = 0;

//     myFunction = () => {
//         counter++;
//         console.log(counter);
//     }
//     myFunction()
//     myFunction()
//     myFunction()
//     myFunction()
// }

////////////////////////////////////// Ricorsione

//fattoriale :
// fact(0) = 1;
// fact(n) = n* fact(n-1);

// function fattoriale(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * fattoriale(n - 1);
// }

// console.log(fattoriale(0)); // 
// console.log(fattoriale(1)); // 
// console.log(fattoriale(2)); // 
// console.log(fattoriale(3)); // 
// console.log(fattoriale(4)); // 
// console.log(fattoriale(5)); // 
// console.log(fattoriale(6)); // 


/////////////

// function isEven(n){
//     if( n=== 0){
//         return true;
//     } else if (n === 1){
//         return false;
//     } else {
//         return isEven(n-2);
//     }
// }

// console.log(isEven(5));
// console.log(isEven(4));

// function isEven(n){
//     if (n=== 0){
//         return true;
//     } else {
//         return isOdd(n-1);
//     }
// }

// function isOdd(n){
//     if (n === 0){
//         return false;
//     } else {
//         return isEven(n-1);
//     }
// }

// console.log(isEven(3));
// console.log(isOdd(3));


///////
// se ci sono rimuovere gli spazzi prima e dopo;
//aggiungere la stringa pippo in fondo
//mettere tutto maiuscolo
// ripeterla per il numero di volte del moltiplicatore
//aggiungergli in fondo la sua lunghezza
//rimuovere tutte le p

function strangeStringFunction(str,multiplier) {
    const strWithoutSpaces = str.trim();
    console.log("senza spazi -> ", strWithoutSpaces);

    const strWithPippo = strWithoutSpaces + "pippo";
    console.log("con la stringa pippo -> ", strWithPippo);

    const stringUpperCase = strWithPippo.toUppercase();
    console.log("Stringa in maiuscolo -> ", stringUpperCase);

    const stringMultiplied = stringUpperCase.repeat(multiplier);
    console.log("Stringa moltiplicata -> ", stringMultiplied);

    const stringWithLength = stringMultiplied + stringMultiplied.length;
    console.log("Lunghezza della stringa -> ", stringWithLength);

    let stringWithoutP = "";
    for (let i = 0; i < stringWithLength.length; i++) {
    const char = stringWithLength.charAt(i);  
    if (char !== "P") {
        stringWithoutP += char;
    }     
    }
    console.log("stringa senza p -> ", stringWithoutP);
}





