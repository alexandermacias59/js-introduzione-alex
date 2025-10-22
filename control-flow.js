//IF -> se la condizione è true esegue il codice tra le graffe altrimenti no

// const pippo = 5;
// const pluto = 3;

// if (pippo > pluto) {
//     console.log("evviva!!!")
// }

//IF - ELSE se la condizione è true esegue il codice tra le graffe dell'if
//        se la condizione è false esegue il codice tra le graffe dell'else

// const pippo = 5;
// const pluto = 3;

// if (pippo < pluto) {
//     console.log("Evviva!!")
// } else {
//     console.log("Brutta storia!!")
// }

//IF - ELSE If - ELSE

// const candy = prompt("quante caramelle hai mangiato ieri?")

// const candyNumber = Number(candy);

// if (candyNumber === 0) {
//     alert("Sei a dieta?")
// } else if(candyNumber < 5) {
//     alert("Molto bravo!!!")
// } else if(candyNumber < 20) {
//     alert("Hai lavato i denti?")
// } else if(candyNumber < 100) {
//     alert("Ti verrà il diabete!!!")
// } else {
//     alert("Hai fatto schifo!!!")
// }



//SWITCH

// const response = prompt("come ti senti oggi?")
// switch (response) {
//     case "felice":
//         alert("Bene,sono felice di sentirlo!")
//         break;
//     case "triste":
//         alert("Su con il morale, oggi è una bella giornata!")
//         break;
//     case "euforico":
//         alert("Bene,ma datti una calmata!")
//         break;
//     case "arrabbiato":
//         alert("Accidenti, raccontami cosa è successo!")
//         break;

//     default:
//         alert("é molto interessante!")
//         break;
// }


// if (response === "felice") {
//     alert("Bene,sono felice di sentirlo!")
//  } else if(response === "triste" ) {
//      alert("Su con il morale, oggi è una bella giornata!")
//  } else if(response === "euforico"  ) {
//      alert("Bene,ma datti una calmata!")
//  } else if( response === "arrabbiato" ) {
//      alert("Accidenti, raccontami cosa è successo!")
//  } else {
//      alert("é molto interessante!")
//  }



// WHILE
// let counter = 0;

// while (counter < 20) {
//     console.log('ciao!'+ counter);
//     counter++;

// }
// console.log('sono uscito dal while')


// let outputString = '';
// while (outputString.length < 100) {
//     outputString = outputString +'pippo';
    
// }
// console.log(outputString);


// while (true) {
//     const number = prompt("indovina il numero che ho pensato");
//     const numberConverted = Number(number);
//     if (numberConverted === 20){
//         alert('hai vinto');
//         break;

//     } else {
//         alert('hai perso, prova di nuovo!')
//     }
        
// }
// console.log("gioco finito")


//DO WHILE -> esegue almeno una volta
// let counter = 0;
// do {
//     console.log('ciao!'+ counter);
//     counter++;
    
// } while (counter < 20);
// console.log('sono uscito dal do while')


//CICLO FOR 
// for (let i = 0; i < 20; i++) {
//     console.log('ciao!' + i);
    
// }
// console.log('sono uscito dal ciclo for')

// for (let i = 19; i >= 0 ; i--) {
//     console.log('ciao!' + i)
// }
// console.log('sono uscito dal ciclo for')

// for (let i = 0; i <= 100; i+=2) {
//     console.log(i);
    
// }


// for (;;) {
   
//         const number = prompt("indovina il numero che ho pensato");
//     const numberConverted = Number(number);
//     if (numberConverted === 20){
//         alert('hai vinto');
//          break;

//      } else {
//         alert('hai perso, prova di nuovo!')
//     }
        
//  }
//  console.log("gioco finito")


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
// console.log("riga:" + 0 + "colonna" + i);        
//     }
// }


