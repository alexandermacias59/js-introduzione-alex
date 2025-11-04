console.log('è il momento degli array')

///ARRAY

let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

// console.log(numbers.length); // -> 10;

// console.log(numbers[3]); // -> 44;

let booleans = [true, true, true, false, true];

// console.log(booleans.length); // -> 5;

// console.log(booleans[3]); // -> false;

let strings = ['pippo', 'pluto', 'topolino', 'leonardo', 'Pippo'];

// console.log(strings.length); // -> 4;

// console.log(strings[3]); // -> 'leonardo'

// let strangeArray = [34, false, 'leonardo', 2, 4, 'leonardo']; //MAI E POI MAI!!!!

// console.log(strangeArray.length); // -> 6;

// console.log(strangeArray[3]); // -> 2

//CICLI CON GLI ARRAY

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }


// let i = 0;

// while (i < numbers.length) {

//     const element = numbers[i];

//     console.log(element);

//     i++;
// }


// for (const element of numbers) { ///FOR OF
//     console.log(element);
// }


// for (const stringa of strings){
//     console.log(stringa)
// }


/// AGGIUNGERE ELEMENTI

// strings.push('paperone'); // push aggiunge in fondo;

// console.log(strings);

// strings.unshift('paperino'); // unshift aggiunge in cima;

// console.log(strings);

/// RIMUOVERE ELEMENTI

// const rimosso = strings.pop(); // pop toglie l'ultimo elemento
// console.log(strings);
// console.log(rimosso);


// const rimosso2 = strings.shift(); // shift toglie il primo elemento
// console.log(strings);
// console.log(rimosso2)


// const rimosso3 = strings.splice(2, 1); // splice toglie in mezzo e restituisce un array con quelli rimossi
// console.log(strings);
// console.log(rimosso3)


// const rimosso4 = numbers.splice(1, 3);
// console.log(numbers);
// console.log(rimosso4)

// CAMBIARE GLI ELEMENTI


// strings[0] = 'superpippo';

// console.log(strings);

// strings[3] = 'super' + strings[3];

// console.log(strings);

// numbers[4] = 2;

// console.log(numbers);

// numbers[8] = numbers[8] * 2;

// console.log(numbers);


/// PATTERN DEGLI ARRAY

// MAP -> modifica di tutti o parte degli elementi di un array

// 1) trasforma tutte le stringe dell'array al maiuscolo

// for (let i = 0; i < strings.length; i++) {

//     strings[i] = strings[i].toUpperCase();

// }

// console.log(strings)
                            //['pippo', 'pluto', 'topolino', 'leonardo']
// function arrayToUppercase(stringArray) {

//     debugger;

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {

//         const element = stringArray[i];

//         const elementUpper = element.toUpperCase()

//         newArray.push(elementUpper);

//     }

//     return newArray;

// }

// console.log(arrayToUppercase(strings));

// 2) moltiplica per due tutti i numeri in un array

// function multiplyBy2Array(numberArray) {

//     const newArray = [];

//     for (let i = 0; i < numberArray.length; i++) {

//         const element = numberArray[i];

//         const dubleElement = element * 2;

//         newArray.push(dubleElement);

//     }

//     return newArray;

// }


// console.log(multiplyBy2Array(numbers));


// 3) trasforma tutte le stringe dell'array che iniziano per p al maiuscolo

// function arrayToUppercaseWordsStartingWithP(stringArray){

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {

//         const element = stringArray[i];

//         if(element[0] === 'p'){
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         } else {
//             newArray.push(element);
//         }


//     }
//     return newArray;
// }


// console.log(arrayToUppercaseWordsStartingWithP(strings))



//FILTER decidere quali degli elementi dell'array tenere

//fare una funzione che rimuove dall'array tutti i numeri dispari


// function removeOddNumbers(nArray){
//     const newArray = [];
//     for (let i = 0; i < nArray.length; i++) {
//         const element = nArray[i];
//         if ( element % 2 === 0){
//             newArray.push(element);
//         }
        
//     }
//     return newArray;
// }
// console.log(removeOddNumbers(numbers));


// scrivere una funzione che rimuova da un array di stringhe tutte quelle che iniziano per p
// function removeStartingWithP(strArray) {
//     const newArray = [];
//     for (let i = 0;  i < strArray.length; i++) {
//         const element = strArray[i];
//         const firstChar = element[0];
//         const firstCharLower = firstChar.toLowerCase()
//         if (firstCharLower !== 'p'){
//             newArray.push(element);
//         }
        
//     } return newArray;
// }
// console.log(removeStartingWithP(strings));

//rimuovi numeri negativi

// function removeNegativesNumbers(nArray){
//     const newArray = [];
//     for (let i = 0; i < nArray.length; i++) {
//         const element = nArray[i];
//         if ( element < 0){
//             newArray.push(element);
//         }
        
//     }
//     return newArray;
// }
// console.log(removeNegativesNumbers(numbers));

//REDUCE = trasforma l'array producendo un risultato che dipende dai componenti dell'array

// 1- Scrivere una funzione che smma tutti i numeri di un array di numeri

// function sumAll(nArray){
//     let result = 0;
//     for (let i = 0; i < nArray.length; i++) {
//         const element = nArray[i];
//         result = result + element;
//     } return result;
// }

// console.log(sumAll(numbers));

// 2- Scrivi una funzione che calcola la media di un array di numeri

// function calculateMean(nArray){
//      let result = 0;
//     for (let i = 0; i < nArray.length; i++) {
//         const element = nArray[i];
//         result = result + element;
//     } 
//     const mean = result / nArray.length;
//     return mean;
// }
// console.log(calculateMean(numbers));

//3- scrivere una funzione che genera una stringa composta dalle iniziali delle stringhe contenute in un array

// function concatFirstChar(strArray){
//     let newString = '';
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const firstChar = element[0];
//         newString = newString + firstChar;
        
//     } return newString;
// }
// console.log(concatFirstChar(strings));

// 4- Scrivere una funzione che restituisce la somma delle lunghezze delle stringhe di un array

// function sumLength(strArray){
//     const sumOfLengths = 0;
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const length = element.length;
//         sumOfLengths = sumOfLengths + length;
//     }
//     return sumOfLengths;
// }
// console.log(sumLength(strings));

//5- scrivere una funzione che trova il numero piu grande in un array

// function findMax(nArray) {
//     let max = 0;
//     for (let i = 0; i < nArray.length; i++) {
//         const element = nArray[i];
//         if (element > max) {
//             max = element;
//         }
        
//     }
//     return max;
// }
// console.log(findMax(numbers));

//COSTRUTTORE

// const pluti = new Array() // -> const pluto = []
// console.log(pluti);

// const pippo = new Array(3, 5, 6);
// console.log(pippo);

// const paperino = new Array (10);
// console.log(paperino);

// for( const element of paperino){
//     console.log(element)
// }


//INDEXOF - mi da la posizione di un elemento

// console.log(numbers.indexOf(100));
// console.log(numbers.indexOf(999));// se l'elemento non è nell'array restituisce -1


//INCLUDES = ci dice se un elemento è contenuto o meno

// console.log(numbers.includes(100));//true
// console.log(numbers.includes(999));// false


// //CONCAT =  ci permette di unire due array,creando un nuovo array

// const topolino = ['leonardo','mattia','daniel'];
// const paperina = ['evelyn', 'salma', 'stefania'];
// const gastone = topolino.concat(paperina);
// console.log(gastone);

// //FUNZIONI MULTI PARAMETRICHE

// function sumAllParams(...params){
//     let result = 0;
//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         result+= element;
//     }
//     return result;
// }
// console.log(sumAllParams(2, 4, 6, 8, 7));

// ARRAY DI ARRAY

const superArray = [[1, 2, 3],[1, 1, 1],[3, 2, 1]];
console.log(superArray.length);
console.log(superArray[0]);

const arrayInterno = superArray[0];

const elemento0ArrayInterno = arrayInterno[0];
console.log(elemento0ArrayInterno);
console.log(superArray[0][0]);

for (let rowNumber = 0; rowNumber < superArray.length; rowNumber++) {
    const row  = superArray[rowNumber];
    for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {
        const cell = row[columnNumber];
        console.log(cell);
    }
}