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

//esercizio 2
// const base = prompt("Inserisci la base:");
// const esponente = prompt("Inserisci l'esponente:");
// const potenza = Math.pow(base, esponente);
// alert ("Il risultato è: " + potenza);


//esercizio 3
// const numero = prompt("Inserisci un numero:");

// if (numero % 2 === 0) {
//     alert("Il numero è pari.");
// } else {
//     alert("Il numero è dispari.");
// }

//esercizio 4
// const eta = prompt("Inserisci la tua età:");
// if (eta >= 18) {
//     alert("Puoi entrare.");
// } else {
//     alert("Oggi non puoi entrare, pivello.");
// }

//esercizio 5
// const  frase = prompt("Inserisci una frase:");
// const fraseInMaiuscolo = frase.toUpperCase();
// alert(fraseInMaiuscolo);



//esercizio 6, fai un ciclo for che stampi il quadrato dei numeri da 1 a 100
// for (let i = 0; i <= 100; i++) {
//     console.log(Math.pow(i,2))
// }

//esercizio 7, fai un ciclo che per i numer ida uno a 100 stampi pari se il numero è pari e dispari se il numero è dispari
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//         console.log("é pari");
//     }else {
//         console.log("è dispari");
//     }
    
    
// }



//Esercizio 8, usando un ciclo logga i numeri da 1 a 100  mettendo un asterisco vicino ai multipli di 7
//  for (let i = 1; i <= 100; i++) {
//      if (i % 7 === 0) {
//          console.log(i + "*");
//      } else {
//          console.log(i);
//      }
//  }


//Esercizio 9, usando un ciclo logga i numeri da 1 a 100 mettendo un  asterisco vicino ai quadrati pefetti
// for (let i = 1; i <= 100; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         console.log(i + "*");
//     } else {
//         console.log(i);
//     }
// }


// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0
// const numero = prompt("Inserisci un numero positivo:");
// if (numero > 0) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("Inserisci un numero positivo!");
// }


// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
const numero1 = parseInt(prompt("Inserisci il primo numero:"));
const numero2 = parseInt(prompt("Inserisci il secondo numero:"));

for (let i = numero1; i < numero2; i++) {
    if (i %2 === 0) {
        console.log(i)
    }
    
}

// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto