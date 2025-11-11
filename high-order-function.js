function sayHello(){
    console.log("hello");
}

const helloHello = () => console.log("hello hello!!");

const superHello = function () {
    console.log("super hello");
    
}

console.log(sayHello);
console.log(helloHello);
console.log(superHello);

///FUNZIONI CON PARAMETRI IN INPUT

//FILTER
const numbers = [100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001];
const testArray = ["pippo","pluto", "paperino", "qui","quo","qua"];
function keepPositive(nbrArray){
    const newArray = [];
    for (const nbr of nbrArray) {
        if(nbr >= 0){
            newArray.push(nbr);
        }
    }
    return newArray;
}
console.log(keepPositive(numbers));

function keepGreaterThan30(nbrArray){
    const newArray = [];
    for (const nbr of nbrArray) {
        if(nbr >= 30){
            newArray.push(nbr);
        }
    }
    return newArray;
}
console.log(keepGreaterThan30(numbers));

function keepLongerThan3(strArray){
    const newArray = [];
    for (let i = 0; i < strArray.length; i++) {
        const str = strArray[i];
        if(str.lenght > 3){
            newArray.push(str);
        }
       
    } return newArray;
}
console.log(keepLongerThan3(testArray));

function highFilter(array,conditionFunction) {

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(conditionFunction(element, i)){
            newArray.push(element);
        }
    }
    return newArray;
}

function isEven(n) {
    if (n % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(highFilter(numbers, isEven));

function notStartingWithP(str){
    const firstChar = str[0];
    const firstLower = firstChar.toLowerCase();

    if (firstLower !== "p"){
        return true;
    } else {
        return false;
    }
}
console.log(highFilter(testArray, notStartingWithP));

console.log(highFilter(numbers, (n) => n < 0));

console.log(numbers.filter((n) => n < 0));

//MAP

function multiplyBy3(nArray) {
    const newArray = [];

    for (let i = 0; i < nArray.length; i++) {
        const n = nArray[i];
        const newN = n*3;
        newArray.push(newN);
    }
    return newArray;
}
console.log(multiplyBy3(numbers));

function multiplyByArrayPosition(nArray){
     const newArray = [];

    for (let i = 0; i < nArray.length; i++) {
        const n = nArray[i];
        const newN = n*i;
        newArray.push(newN);
    }
    return newArray;
}
console.log(multiplyByArrayPosition(numbers));

function toUpperCaseArray(sArray){
     const newArray = [];

    for (let i = 0; i < sArray.length; i++) {
        const s = sArray[i];
        const newString = s.toUpperCase()
        newArray.push(newString);
    }
    return newArray;
}
console.log(toUpperCaseArray(testArray));

function highMap(array, transformFunction){
    const newArray = [];
    for (let i= 0; i< array.length; i++) {
        const element = array[i];
        const newElement = transformFunction(element);
        newArray.push(newElement);        
    }
    return newArray;
}

function MultiplyBy3Number(n){
    return n*3;
}
console.log(highMap(numbers, MultiplyBy3Number));
console.log(highMap(numbers, (n) => n *3));
console.log(numbers.map((n) => n * 3));

console.log(highMap(testArray, (s) => s.toUpperCase()));
console.log(testArray.map((s) => s.toUpperCase()));

console.log(highMap(numbers, (n, i) => n * i));
console.log(numbers.map((n, i) => n * i ));


//REDUCE

function sumAll(nArray){
    let sum = 0;
    for (let i = 0; i < nArray.length; i++) {
        const n = nArray[i];

        sum += n;
        
    }
    return sum;
}
console.log("La somma di tutti gli array è: " + sumAll(numbers));


function stringWithFirstChars(sArray){
    let newString = "";
    for (let i = 0; i < sArray.length; i++) {
        const s = sArray[i];
        const firstChar = s[0];
        newString += firstChar;
    }
    return newString;
}
console.log(stringWithFirstChars(testArray));



function highReduce (array, reduceFunction, startingValue){
    let accumulator = startingValue;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        accumulator = reduceFunction(accumulator, current, i)
    }
    return accumulator;
}

console.log(highReduce(numbers, (sum,n) => sum + n, 0));
console.log(numbers.reduce((sum,n) => sum + n, 0));


function sumFirstChar(acc, curr){
    const firstChar = curr[0];
    return acc + firstChar;
}

console.log(highReduce(testArray, sumFirstChar, ""));
console.log(testArray.reduce(sumFirstChar, ""));
console.log(testArray.reduce((acc, curr) => acc + curr[0], ""));