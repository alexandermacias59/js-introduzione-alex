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

// function numeroMaggiore(a,b) {
// if (a>b) {
//   return a;
// } else if (b>a) {
//   return b;
// } else {
//   return "Numeri uguali";
// }
// }
// const isMayor = numeroMaggiore(114,122);
// console.log(isMayor);


// const numeroMaggioreLambda = (a,b) => {
//   if (a>b) { return a} else if (b>a) { return b} else "Numeri uguali";
// }
// const isMayorLambda = numeroMaggioreLambda(1000,200);
// console.log(isMayorLambda);


// //<-------------------------------------------------------------------------------------------------------->


// // 20) Scrivere una funzione che date in input due stringhe ritorni la più corta;

// function mostShortString(string1, string2) {
//   if (string1.length < string2.length) {
//     return string1;
//   } else if (string2.length < string1.length ) {
//     return string2;
//   } else {
//     return "Hanno la stessa lunghezza";
//   } 
// } 
// const shortString = mostShortString("banana", "mango");
// console.log(shortString);


// const mostShortStringLambda = (a,b) => { if (a.length < b.length) {return a;} else if (b.length < a.length ) {return b;} else {return "Hanno la stessa lunghezza";}}
//  const shortStringLambda = mostShortStringLambda("Javascript", "Java");
//  console.log(shortStringLambda);

//  //<-------------------------------------------------------------------------------------------------------->


// // 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;

// function firstLetterString (string) {
//   return string[0];
// }
// const primaLettera = firstLetterString("micro");
// console.log(primaLettera);


// const firstLetterStringLambda = string => { return string[0] };
// const primaLetteraLambda = firstLetterStringLambda("Animale");
// console.log(primaLetteraLambda);

// //<-------------------------------------------------------------------------------------------------------->


// // 22) scrivere una fuzione che dati in input una stringa e un numero,logghi la stringa tante volte quante il numereo dato;

// function stringMultiplier(string, number) {
//   for (let i = 0; i < number; i++) {
//     console.log(string);
//   }
// }

// const stringaMoltiplicata = stringMultiplier("aceite ", 6);
// console.log(stringaMoltiplicata);

// const stringMultiplierLambda = (string, number) => { for (let i = 0; i < number; i++) { console.log(string); } }
// const stringaMoltiplicataLambda = stringMultiplierLambda("cioccolato", 4);
// console.log(stringaMoltiplicataLambda);

//<-------------------------------------------------------------------------------------------------------->

//23) You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

// Funzione che conta quante volte un certo carattere compare in una stringa

// function contaCarattere(stringa, carattere) {
//   let conteggio = 0;
//   for (let i = 0; i < stringa.length; i++) {
//     if (stringa[i] === carattere) {
//       conteggio++;
//     }
//   }
//   return conteggio;
// }

// // Funzione che conta solo le "B" maiuscole, usando la funzione sopra

// function contaB(stringa) {
//   return contaCarattere(stringa, "B");
// }

// // Esempi di test
// console.log(contaB("BuBuBani"));              // 3
// console.log(contaCarattere("Ciao mondo", "o")); // 2
// console.log(contaCarattere("Banana", "a"));     // 3

// //<-------------------------------------------------------------------------------------------------------->

// //24) Inversione di un numero
// //Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// function reverseNumber(n) {

//   let string = n.toString();
//   let rev = string.split('').reverse().join('');
  
//   return parseInt(rev);
// }
// console.log(reverseNumber(123)); 

// //correzione in classe

// function reverseNumber(nbr){
//   const nbrToString = String(nbr);
//   let rev = "";
//   for (let i= nbrToString.length -1; i >= 0; i--){
//     const char = nbrToString[i];
//     rev += char;
//   }
//    const revToNumber = Number(rev);
//    return revToNumber;
// }
// console.log(reverseNumber(123456));

// //<-------------------------------------------------------------------------------------------------------->

// //25) Tabellina
// //Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.

// function tabellina(n) {
//   for (let i = 1; i <=10; i++) {
//       console.log(n * i);
//   }
// }
// console.log(tabellina(Math.floor(Math.random() * 10)));

// //<-------------------------------------------------------------------------------------------------------->

// //26) Fibonacci
// //Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.

// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b;
// }
// console.log(fibonacci(7)); 

// //<-------------------------------------------------------------------------------------------------------->

// //27)  Conteggio vocali
// //Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

// function contaVocali(str) {
//   let counter = 0;                   // tiene il conto delle vocali trovate
//   const vocali = "aeiouAEIOU";         // elenco di tutte le vocali

//   for (let i = 0; i < str.length; i++) {
//     if (vocali.includes(str[i])) { 
//       counter++;
//     }
//   }

//   return counter;                    // numero totale di vocali
// }

// console.log(contaVocali("Cioccolato"));

// //<-------------------------------------------------------------------------------------------------------->

// //28) Sconto
// //Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.
// function applicaSconto(numero,sconto) {
//   let prezzoScontato = numero - (numero * sconto)/100;
//  return prezzoScontato;
// }
// console.log(applicaSconto(2000,20))

// //<-------------------------------------------------------------------------------------------------------->

// //29) Conversione gradi
// //Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit


// function convertiGradi(cDeg) {
//   let fDeg = (cDeg * 1.8) + 32;
//   console.log(cDeg +" Gradi Celsius")
//   return fDeg;
// }
// console.log(convertiGradi(100) + " Gradi Fahreinheit");

// //<-------------------------------------------------------------------------------------------------------->

// //30) Verifica password
// //Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// // - Ha almeno 8 caratteri
// // - Contiene almeno una lettera maiuscola
// // - Contiene almeno un carattere speciale tra questi '!#@$%'
// // - Non contiene la parola 'cacca'

// function verificaPassword(password) {
//   // Controlla che abbia almeno 8 caratteri
//   const lunghezzaValida = password.length >= 8;

//   // Controlla che ci sia almeno una lettera maiuscola
//   const haMaiuscola = /[A-Z]/.test(password);

//   // Controlla che ci sia almeno un carattere speciale tra ! # @ $ %
//   const haSpeciale = /[!#@$%]/.test(password);

//   // Controlla che NON contenga la parola "cacca" (ignorando maiuscole/minuscole)
//   const contieneCacca = /cacca/i.test(password);

//   // Tutte le condizioni devono essere vere, tranne quella di "cacca"
//   return lunghezzaValida && haMaiuscola && haSpeciale && !contieneCacca;
// }

// // Esempi di test
// console.log(verificaPassword("Abcdef!1"));     // true 
// console.log(verificaPassword("abcdef!1"));     // false (manca maiuscola)
// console.log(verificaPassword("Abcdefgh"));     // false (manca carattere speciale)
// console.log(verificaPassword("Cacca123!"));    // false (contiene "cacca")

// //corretto in classe


// function hasSpecialCharacters(str){
//     if (password.includes("!")
//         || password.includes('#')
//         || password.includes('@')
//         || password.includes('$')
//         || password.includes('%')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsUppercaseChar(str){
//     if (str.toLowerCase() === str) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function isTooShort(str){
//     if(str.length < 8){
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsCacca(str){
//     if(str.includes('cacca')){
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkPassword(password) {
//     // if(password.length < 8){
//     //     return false;
//     // } else {
//     //     if(password.toLowerCase() === password){
//     //         return false;
//     //     } else {
//     //         if (password.includes("!")
//     //         || password.includes('#')
//     //         || password.includes('@')
//     //         || password.includes('$')
//     //         || password.includes('%')) {
//     //             if (password.includes('cacca')) {
//     //                 return false;
//     //             } else {
//     //                 return true;
//     //             }
//     //         } else {
//     //             return false;
//     //         }
//     //     }
//     // }

//     if (isTooShort(password)) {
//         return false;
//     } else if (!containsUppercaseChar(password)){
//         return false;
//     } else if (!hasSpecialCharacters(password)){
//         return false;
//     } else if (containsCacca(password)) {
//         return false;
//     } else {
//         return true;
//     }
// }


// console.log(checkPassword('caccacaccacacca'));
// console.log(checkPassword('Leonardo!'));


// //<-------------------------------------------------------------------------------------------------------->

//31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15

// function sommaFinoAN(n) {
//   let somma = 0;

//   for (let i = 1; i <= n; i++) {
//     somma = somma + i;
//   }
//   return somma;
// }
// console.log("La somma è " + sommaFinoAN(5)); // Output: 15 (1+2+3+4+5)


// // //<-------------------------------------------------------------------------------------------------------->

// // 32) Conteggio cifre
// // Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// function contaCifre(number) {
//     const numberToString = String(number);
//     const numeroCifre = numberToString.length;
//     return numeroCifre;
// }
// console.log("Ci sono " + contaCifre(123453345356) + " cifre");

// // //<-------------------------------------------------------------------------------------------------------->

// // 33) Somma delle cifre
// // Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
//  function sommaCifre(n){
//     const nToString = String(n);
//     let sommaNum = 0;
//     for (let i = 0; i < nToString.length; i++) {
//         sommaNum += Number(nToString[i]);
//     }
//     return sommaNum;
//  }
//  console.log("La somma delle cifre è " + sommaCifre(3456744));

//  // //<-------------------------------------------------------------------------------------------------------->

// // 34) Conversione valuta
// // Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).
// function euroToDollaro(euro) {
//     let dollaro = 1.16;
//     let opConversione = euro * dollaro;
//     let conversione = opConversione * dollaro;
//     return conversione;
// }

// console.log(euroToDollaro(25) + " $");

// // //<-------------------------------------------------------------------------------------------------------->

// // 35) Calcolo area rettangolo
// // Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.
// function areaRettangolo(base,altezza){
//     let area = base * altezza;
//     return area;
// }
// console.log("L'area del rettangolo è " + areaRettangolo(12,22));

// // //<-------------------------------------------------------------------------------------------------------->

// // 36) Calcolo media
// // Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.
// function calcoloMedia(a,b,c) {
//     let operazione = (a + b + c) / 3;
//     return operazione;
// }
// console.log("La media dei 3 numeri è " + calcoloMedia(25,30,15));

// // //<-------------------------------------------------------------------------------------------------------->

// // 37) Generatore di password casuale
// // Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// function generaPasswordCasuale() {
//   let password = "";
//   const lunghezza = 8;

//   for (let i = 0; i < lunghezza; i++) {
//     const typeNOrS = Math.random(); // decide se generare lettera o numero
//     if (typeNOrS < 0.5) {
//       // lettera maiuscola (A-Z)
//       const codice = Math.floor(Math.random() * 26) + 65;
//       password += String.fromCharCode(codice);
//     } else {
//       // numero (0-9)
//       const cifra = Math.floor(Math.random() * 10);
//       password += cifra;
//     }
//   }
//   return password;
// }
// console.log("La tua password è: " + generaPasswordCasuale());

// // //<-------------------------------------------------------------------------------------------------------->

// // 38) Potenza con ciclo
// // Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.

// function potenzaCiclo(base, esponente) {
//   let risultato = 1;

//   for (let i = 0; i < esponente; i++) {
//     risultato *= base; // moltiplica il risultato per la base ogni volta
//   }

//   return risultato;
// }
// console.log(potenzaCiclo(2, 3)); 

// // //<-------------------------------------------------------------------------------------------------------->

// // 39) Scrivi un validatore di email con queste regole:
// // -deve contenere una @
// // -deve contenere un punto posizionato dopo la @
// // -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// // -il punto non può essere l'ultimo carattere

// function validaEmail(email) {
//   let haChiocciola = false;
//   let haPuntoDopoChiocciola = false;
//   let indiceChiocciola = -1;
//   let indicePunto = -1;
//   // 1) trovare '@' e '.'
//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === '@') {
//       if (haChiocciola) return false; // più di una '@'
//       haChiocciola = true;
//       indiceChiocciola = i;
//     }
//     if (haChiocciola && email[i] === '.' && indicePunto === -1) {
//       haPuntoDopoChiocciola = true;
//       indicePunto = i;
//     }
//   }
//   // 2) controlli base
//   if (!haChiocciola) return false;                  // manca la @
//   if (!haPuntoDopoChiocciola) return false;         // manca un punto dopo la @
//   if (indicePunto === email.length - 1) return false; // punto finale
//   // 3) contare lettere prima della @
//   let letterePrima = 0;
//   for (let i = 0; i < indiceChiocciola; i++) {
//     const c = email[i];
//     if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
//       letterePrima++;
//     }
//   }
//   if (letterePrima < 3) return false;
//   // 4) contare lettere tra @ e punto
//   let lettereTra = 0;
//   for (let i = indiceChiocciola + 1; i < indicePunto; i++) {
//     const c = email[i];
//     if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
//       lettereTra++;
//     }
//   }
//   if (lettereTra < 3) return false;

//   return true; // tutte le regole rispettate
// }
// console.log(validaEmail("abc@def.com"));  //  true
// console.log(validaEmail("ab@def.com"));   //  false (solo 2 lettere prima)
// console.log(validaEmail("abc@de.com"));   //  false (solo 2 lettere tra @ e .)
// console.log(validaEmail("abc@def."));     //  false (punto finale)
// console.log(validaEmail("abc@@def.com")); //  false (due @)

// // //<-------------------------------------------------------------------------------------------------------->

// // 40) crea un convertitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

// function farfallinoConvert(text) {
//   const vowels = "aeiouAEIOU";
//   let result = "";
//   for (const ch of text) {
//     if (vowels.includes(ch)) {
//       if (ch === ch.toUpperCase()) {
//         result += ch + "F" + ch;
//       } else {
//         result += ch + "f" + ch;
//       }
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// }


// console.log(farfallinoConvert("Aereoplano"));     
// console.log(farfallinoConvert("Vacanze"));  


const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

function squareArray(nbrArray) {
     let risultati = [];
  for (let i = 0; i < nbrArray.length; i++) {
    risultati.push(nbrArray[i] ** 2);
  }
  return risultati;
}

console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]


//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

function squareOddArray(nbrArray) {
      let risultati = [];
  for (let i = 0; i < nbrArray.length; i++) {
    let numero = nbrArray[i];
    if (numero % 2 !== 0) {
      risultati.push(numero ** 2);
    } else {
      risultati.push(numero);
    }
  }
  return risultati;
}

console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]

//42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e divida per due i negativi

function multiplyPoisitiveAndDivideNegative(nbrArray) {
      let risultati = [];
  for (let i = 0; i < nbrArray.length; i++) {
    let numero = nbrArray[i];
    if (numero > 0) {
      risultati.push(numero * 2);
    } else if (numero < 0) {
      risultati.push(numero / 2);
    } else {
      risultati.push(numero); // se è 0, resta invariato
    }
  }
  return risultati;
}

console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];


// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.

function trovaMinimo(array) {
  if (array.length === 0) {
    return undefined; // array vuoto
  }
  
  let minimo = array[0]; // assumiamo che il primo elemento sia il minimo
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimo) {
      minimo = array[i];
    }
  }
  
  return minimo;
}

console.log(trovaMinimo(pippo)); // dovrebbe restituire -123

// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.
function invertiArray(array) {
  let arrayInverso = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInverso.push(array[i]);
  }
  return arrayInverso;
}

console.log(invertiArray(pippo)); // dovrebbe restituire [4, 22, 2, -23, 3, -123, 11, 78, 56, 4, 2, 1]

// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.
function maiuscoloTutto(array) {
  let risultati = [];
  for (let i = 0; i < array.length; i++) {
    risultati.push(array[i].toUpperCase());
  }
  return risultati;
}


// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.
function sommaRighe(matrice) {
  let somme = [];
  for (let i = 0; i < matrice.length; i++) {
    let sommaRiga = 0;
    for (let j = 0; j < matrice[i].length; j++) {
      sommaRiga += matrice[i][j];
    }
    somme.push(sommaRiga);
  }
  return somme;
}

// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array.
function contaOccorrenze(array, elemento) {
  let conteggio = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      conteggio++;
    }
  }
  return conteggio;
}


// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari
function filtraIndicePari(array) {
  let risultati = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      risultati.push(array[i]);
    }
  }
  return risultati;
}



// 49) Somma pari 
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari
function sommaPari(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      somma += array[i];
    }
  }
  return somma;
}


// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input
function trovaLunghezzeParola(array) {
  let lunghezze = [];
  for (let i = 0; i < array.length; i++) {
    lunghezze.push(array[i].length);
  }
  return lunghezze;
}
console.log(trovaLunghezzeParola(["ciao", "pippo", "javascript"])); // dovrebbe restituire [4, 5, 10]