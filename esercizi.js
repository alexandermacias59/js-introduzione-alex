//1) chiedete all'utente il nome e fategli gli auguri di compleanno
//2) chiedete all'utente la base e l'esponente e calcolate la potenza
//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)
//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"
//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)



//esercizio 1
// const nome = prompt("Inserisci il tuo nome:");
// if (nome) {
//     alert("Buon compleanno, " + nome + "!");
// }

//<-------------------------------------------------------------------------------------------------------->

//esercizio 2

// const base = prompt("Inserisci la base:");
// const esponente = prompt("Inserisci l'esponente:");
// const potenza = Math.pow(base, esponente);
// alert ("Il risultato è: " + potenza);

//<-------------------------------------------------------------------------------------------------------->

//esercizio 3

// const numero = prompt("Inserisci un numero:");
// if (numero % 2 === 0) {
//     alert("Il numero è pari.");
// } else {
//     alert("Il numero è dispari.");
// }

//<-------------------------------------------------------------------------------------------------------->

//esercizio 4

// const eta = prompt("Inserisci la tua età:");
// if (eta >= 18) {
//     alert("Puoi entrare.");
// } else {
//     alert("Oggi non puoi entrare, pivello.");
// }

//<-------------------------------------------------------------------------------------------------------->

//esercizio 5

// const  frase = prompt("Inserisci una frase:");
// const fraseInMaiuscolo = frase.toUpperCase();
// alert(fraseInMaiuscolo);

//<-------------------------------------------------------------------------------------------------------->

//esercizio 6, fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// for (let i = 0; i <= 100; i++) {
//     console.log(Math.pow(i,2))
// }

//<-------------------------------------------------------------------------------------------------------->

//esercizio 7, fai un ciclo che per i numer ida uno a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//         console.log("é pari");
//     }else {
//         console.log("è dispari");
//     }
// }

//<-------------------------------------------------------------------------------------------------------->

//Esercizio 8, usando un ciclo logga i numeri da 1 a 100  mettendo un asterisco vicino ai multipli di 7

//  for (let i = 1; i <= 100; i++) {
//      if (i % 7 === 0) {
//          console.log(i + "*");
//      } else {
//          console.log(i);
//      }
//  }

//<-------------------------------------------------------------------------------------------------------->

//Esercizio 9, usando un ciclo logga i numeri da 1 a 100 mettendo un  asterisco vicino ai quadrati pefetti

// for (let i = 1; i <= 100; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         console.log(i + "*");
//     } else {
//         console.log(i);
//     }
// }

//<-------------------------------------------------------------------------------------------------------->

// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// const numero = prompt("Inserisci un numero positivo:");
// if (numero > 0) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("Inserisci un numero positivo!");
// }

//<-------------------------------------------------------------------------------------------------------->

// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// const numero1 = parseInt(prompt("Inserisci il primo numero:"));
// const numero2 = parseInt(prompt("Inserisci il secondo numero:"));
// for (let i = numero1; i < numero2; i++) {
//     if (i %2 === 0) {
//         console.log(i);
//     }   
// }

//<-------------------------------------------------------------------------------------------------------->

// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto
// const chiediEta = parseInt(prompt("Quanti anni hai?"));
// const annInOre = (chiediEta * 365 * 24);
// alert("Fino ad ora hai vissuto: " + annInOre + " ore");


//<-------------------------------------------------------------------------------------------------------->

//esercizi per casa

//Escribe un bucle que realice siete llamadas a console.log para mostrar el
// siguiente triángulo:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let i = 0; i < 7; i++) {
    
//     console.log("#".repeat(i))
// }

// for (let i = 1; i <= 7; i++) {
//   let linea = '';
//   for (let j = 1; j <= i; j++) {
//     linea += '#';
//   }
//   console.log(linea);
// }

// let linea = "#";
// for (let i = 0; i < 7; i++) {
// console.log(linea) ;
// linea = linea + "#" ;
// }



//<-------------------------------------------------------------------------------------------------------->

// FizzBuzz
// Escribe un programa que use console.log para imprimir todos los números
// del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime
// "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3),
// imprime "Buzz" en su lugar.
// Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
// " para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
// "Buzz" para los números que son divisibles solo por uno de esos).
// (Esto es en realidad una pregunta de entrevista que se ha afirmado que
// elimina a un porcentaje significativo de candidatos a programadores. Entonces,
// si lo resolviste, tu valor en el mercado laboral acaba de aumentar.)

// for (let i = 1; i < 100; i++) {
//  if (i % 3 === 0) {
//     console.log("Fizz" + i)
    
//  } else if (i % 5 === 0){
//     console.log("Buzz"+ i)
    
//  }    
// }

// for (let i = 1; i <= 100; i++) {
//  if (i % 3 === 0 & i % 5 === 0) {
//     console.log("Fizzbuzz " + i)
    
//  } else if (i % 5 === 0){
//     console.log("Buzz "+ i)
    
//  } else if (i % 3 === 0) {
//     console.log("Fizz " + i)
//  }
//  else{
//     console.log(i)
//  }
// }


//<-------------------------------------------------------------------------------------------------------->

// Tablero de ajedrez
// Escribe un programa que cree una cadena que represente un tablero de 8x8,
// usando caracteres de salto de línea para separar las líneas. En cada posición
// del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
// formar un tablero de ajedrez.
// Al pasar esta cadena a console.log debería mostrar algo como esto:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// Cuando tengas un programa que genere este patrón, define una variable size
// = 8 y cambia el programa para que funcione para cualquier size, generando
// un tablero con el ancho y alto dados.

// let size = 8;
// let tavola = ""; // cadena vacía donde construiremos el tablero

// for (let fila = 0; fila < size; fila++) {
//   for (let colonna = 0; colonna < size; colonna++) {
    
//     if ((fila + colonna) % 2 == 0) {
//       tavola += " ";
//     } else {
//       tavola += "#";
//     }
//   }
//   tavola += "\n";
// } console.log(tavola);



// let size = 8;

// let linea1 = " #".repeat(size / 2);
// let linea2 = "# ".repeat(size / 2);
// let tablero = "";

// for (let i = 0; i < size; i++) {
//   tablero += (i % 2 === 0 ? linea1 : linea2) + "\n";
// }

// console.log(tablero);

//correzione esercizi

// let chessboard = "";

// for (let i = 0; i < 8; i++) {
//   if(i % 2 === 0){
//     chessboard = chessboard + " # # # # \n"
//   }
//   else{
//     chessboard = chessboard + "# # # #\n"
//   }
  
// }console.log(chessboard)

// let size = 8 ;
// let chessboard = "";

// for (let line = 0; line < size; line++) {

// for (let column = 0; column < 0; column++) {

//      if (line % 2 === 0) {

//       if (column % 2 === 0) {
//         chessboard = chessboard + "";
//       } else {
//         chessboard = chessboard + "#";
//       }

//      } else{

//       if (column % 2 === 0) {
//         chessboard = chessboard + "#";
//       } else {
//         chessboard = chessboard + "";
//       }

//      }
// }  chessboard = chessboard + "\n"
// } console.log(chessboard)


// let size = 8 ;
// let chessboard = "";

// for (let line = 0; line < size; line++) {

// for (let column = 0; column < 0; column++) {

//      if((line + column) % 2 === 0) {
//       chessboard = chessboard + " "
//      } else {
//       chessboard = chessboard + "#"
//      }
// }  chessboard = chessboard + "\n"
// } console.log(chessboard)


//<-------------------------------------------------------------------------------------------------------->


//esercizio 16 / Scrivere una funzione che mi dice se un numero è pari;

// function checkEven(inputNumber) {
//   const isEven = inputNumber % 2 === 0 ;
//   return isEven;
// }
// const evenNumber = checkEven(6);
// console.log(evenNumber);
// //arrow function
// const checkEvenLambda = (inputNumber) => inputNumber % 2 === 0;
// const evenNumber2 = checkEvenLambda(7);
// console.log(evenNumber2);

//<-------------------------------------------------------------------------------------------------------->


// ESericizio 17 / scrivere una funzione che moltiplichi una stringa per un numero
// es : se inserisco "cacca" e 3 , l'output sara "caccacaccacacca"

// function multiplyString(inputString,multiplier) {
//   let multipliedString = "";
//   for (let i = 0; i < multiplier; i++) {
//       multipliedString = multipliedString + inputString;
//       // multipliedString += inputString;    
//   } return multipliedString;
// }
// const res = multiplyString("pippo",3);
// console.log(res);

// //Versione arrow function
// const multipliedStringLambda = (inputString,multiplier) =>inputString.repeat(multiplier);

// const resLambda = multipliedStringLambda("basta",5);
// console.log(resLambda);

//<-------------------------------------------------------------------------------------------------------->


//  Esercizio 18 / Scrivi una funzione che dato un numero mi dice se è intero oppure no

// function checkInteger(n) {
//   const isInteger = n% 1 === 0;
//   return isInteger;
// }

// const integerNumber = checkInteger(45);
// console.log(integerNumber);

// const checkIntegerLambda = (n)=> n % 1 === 0; 
// const integerNumberLambda = checkIntegerLambda(3.14)
// console.log(integerNumberLambda);

//<-------------------------------------------------------------------------------------------------------->


// 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore;

function numeroMaggiore(a,b) {
if (a>b) {
  return a;
} else if (b>a) {
  return b;
} else {
  return "Numeri uguali";
}
}
const isMayor = numeroMaggiore(114,122);
console.log(isMayor);


const numeroMaggioreLambda = (a,b) => {
  if (a>b) { return a} else if (b>a) { return b} else "Numeri uguali";
}
const isMayorLambda = numeroMaggioreLambda(1000,200);
console.log(isMayorLambda);


//<-------------------------------------------------------------------------------------------------------->


// 20) Scrivere una funzione che date in input due stringhe ritorni la più corta;

function mostShortString(string1, string2) {
  if (string1.length < string2.length) {
    return string1;
  } else if (string2.length < string1.length ) {
    return string2;
  } else {
    return "Hanno la stessa lunghezza";
  } 
} 
const shortString = mostShortString("banana", "mango");
console.log(shortString);


const mostShortStringLambda = (a,b) => { if (a.length < b.length) {return a;} else if (b.length < a.length ) {return b;} else {return "Hanno la stessa lunghezza";}}
 const shortStringLambda = mostShortStringLambda("Javascript", "Java");
 console.log(shortStringLambda);

 //<-------------------------------------------------------------------------------------------------------->


// 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;

function firstLetterString (string) {
  return string[0];
}
const primaLettera = firstLetterString("micro");
console.log(primaLettera);


const firstLetterStringLambda = string => { return string[0] };
const primaLetteraLambda = firstLetterStringLambda("Animale");
console.log(primaLetteraLambda);

//<-------------------------------------------------------------------------------------------------------->


// 22) scrivere una fuzione che dati in input una stringa e un numero,logghi la stringa tante volte quante il numereo dato;

function stringMultiplier(string, number) {
  for (let i = 0; i < number; i++) {
    console.log(string);
  }
}

const stringaMoltiplicata = stringMultiplier("aceite ", 6);
console.log(stringaMoltiplicata);

const stringMultiplierLambda = (string, number) => { for (let i = 0; i < number; i++) { console.log(string); } }
const stringaMoltiplicataLambda = stringMultiplierLambda("cioccolato", 4);
console.log(stringaMoltiplicataLambda);