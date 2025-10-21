// console.log('hello world!');

//boolean
true;
false;

//number
3;
3.14;
-34.4;
Infinity;
-Infinity;

NaN; //-> not a number

//string
'ciao mondo';
"hello world";
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quos tenetur vel quas nihil quod? Reiciendis impedit quo ducimus officia harum nulla veniam, temporibus doloremque, reprehenderit adipisci fugiat illum maxime.";
'a';
'';

//tipi nulli
undefined; //-> non definito
null; //-> nullo

//OPERATORI LOGICI

// not(!)
true; //vero
!true; //falso

false; //falso
!false; //vero

// console.log(!false);

// and (&&)
true && true; //true
true && false; //false
false && true; //false
false && false; //false

// console.log(true && true);
// console.log(true && false);

// or (||)
true || true; //true
true || false; //true
false || true; //true
false || false; //false

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

//OPERATORI MATEMATICI

// somma(+)
5 + 10; //15

// sottrazione(-)
-3.1;
90 - 10; //80

// moltiplicazione(*)
6 * 8; //48

// divisione(/)
9 / 3; //3

// potenza(**)
2**3; //8
4**2; //16

// modulo(%) -> resto della divisione intera
10 % 3; //1
5 % 3; //2
12 % 7; //5
24 % 11; //2

// somma(concatenazione) di stringhe(+)
"ciao" + "mamma"; //"ciaomamma"
"ciao " + "mamma"; //"ciao mamma"
"ciao" + " " + "mamma"; //"ciao mamma"

//OPERATORI DI CONFRONTO

//ugualianza (== o ===)
5 === 5; //true
7 === 2; //false

7 === '7'; //false
7 == '7'; //true -> il doppio uguale converte prima di confrontare

true === true; //true
true === false; //false

"pippo" === "pippo";//true
"pippo" === "pluto";//false

//diversità (!= o !==)

5 !== 3;//true
5 !== 5;//false

!(7 === 7);//false

7 !== '7'; //true
7 != '7'; //false

true !== true; //false
true !== false; //true

"pippo" !== "pippo"; //false
"pippo" !== "pluto"; //true

//maggiore e maggiore o uguale (> o >=)
//minore e minore o uguale (< o <=)

7 > 6; //true
7 > 8; //false
7 > 7; //false
7 >= 7; //true

// parentesi (())
// ((5 + 2) * 2 - (4 - 3));
// (7 * 2 - 1);
// (14 - 1);
// 13;


//ESERCIZI
//1)
// !(true || true) //false
// //2)
// !(true || ("pippo" === "pluto"))
// !(true || false) //false
// //console.log(!(true || ("pippo" === "pluto")))
// //3)
// !((12 % 5) === 3)//true
// //4)
// ("ciao mondo" !== ("ciao" + "  " + "mondo")) === false;//false


//VARIABILE


//VAR -> NON USARE MAI
// var firstNumber = 5;
// console.log(firstNumber);

// var secondNumber = 10;

// var sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// var empty;
// console.log(empty);

//LET

// let firstNumber = 5;
// console.log(firstNumber);

// let secondNumber = 10;

// let sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// let empty;
// console.log(empty);

// secondNumber = 20;

// let newSumOfNumbers = firstNumber + secondNumber;
// console.log(newSumOfNumbers);

// let firstName = "Stefania";
// let hello = "Ciao" + " " + firstName;
// console.log(hello);

//DIFFERENZA TRA LET E VAR;


// let pluto = pippo + 30; javascript segnala un errore perchè uso una variabile non ancora inizializzata
// let pippo = 5;
// console.log(pluto);


// var paperoga = paperino + 30; javascript può usare la variable ma essa è ancora undefined
// var paperino = 5;
// console.log(paperoga);


//CONST

// const qui = true;
// const quo = false;
// const qua = qui && quo;
// console.log(qua);

// qui = false; // javascript mi segnala un errore perchè non posso cambiare valore ad una constante


//type of
 
// const variabile1 = 3;
// console.log(typeof variabile1);

// const variabile2 = true;
// console.log(typeof variabile2);

// const variabile3 = "axia";
// console.log(typeof variabile3);

// const variabile4 = typeof variabile1;
// console.log("il contenuto di variabile 4 è: " + variabile4 + " e il suo tipo è: " + typeof variabile4);

// const variabile5 = 5 > 6;
// console.log(typeof variabile5);

// let variabile6;
// console.log(typeof variabile6);//tipo undefined

// const variabile7 = null;
// console.log(typeof variabile7);//tipo object

// const variabile8 = NaN;
// console.log(typeof variabile8);//tipo number?????

// // javascript è dinamicamente tipato e le variabili prendono il tipo del contenuto che può anche cambiare nel tempo

// let dynamic;
// console.log(typeof dynamic);

// dynamic = 5;
// console.log(typeof dynamic);

// dynamic = "pippo";
// console.log(typeof dynamic);


//ALERT

//alert("ciao mondo!");

// const birthdayGirl = "Salma";

// alert("Auguri " + birthdayGirl);

//PROMPT

// const age = prompt("Quanti anni hai?");

// console.log(age);//"123"
// console.log(typeof age);//string

//CALCOLATRICE BASE

// const first = prompt('dammi il primo numero');
// const second = prompt('dammi il secondo numero');

// const firstToNumber = Number(first);
// const secondToNumber = Number(second);

// const sum = firstToNumber + secondToNumber;

// alert("la somma è: " + sum);



