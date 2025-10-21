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
const  frase = prompt("Inserisci una frase:");
const fraseInMaiuscolo = frase.toUpperCase();
alert(fraseInMaiuscolo);