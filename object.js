// console.log("Oggetti");
// // chiave: valore
// const Gatto = {
//     name: 'Gatto',
//     surname: 'Macias',
//     age: 3,
//     gender: 'male',
//     address:{
//         street:'via borzoli',
//         civic: 8,
//         city: 'Genoa',
//         country: 'Italy'
//     },
//     nationality: 'european',
//     married: false,
//     interests:[
//         'sleep',
//         'poop',
//         'eat'
//     ]
// }
// //accedere alla proprieta
// console.log(Gatto);
// console.log(Gatto.name);
// console.log(Gatto.age);
// console.log(Gatto.interests);
// console.log(Gatto.address);
// console.log(Gatto.address.street);
// console.log(Gatto.interests[0]);

// // Cambiare o aggiungere proprieta

// Gatto.age = 2;
// console.log(Gatto);

// Gatto.interests[2] = 'play';
// Gatto.siblings = 1; // nuova propieta

// delete Gatto.gender; //eliminare una proprieta
// console.log(Gatto);


// //Funzioni come proprieta


// function saluta(){
//     console.log('Ciao');
// }
// Gatto.speak = saluta;
// Gatto.speak()
// // si puo accedere ad un array di oggetti
// const persone = [
//   { nome: "Luca", cognome: "Rossi" },
//   { nome: "Giulia", cognome: "Bianchi" },
//   { nome: "Marco", cognome: "Verdi" }
// ];

// // Ciclo for classico
// for (let i = 0; i < persone.length; i++) {
//   console.log(persone[i].nome + " " + persone[i].cognome);
// }


//FOR IN

// const ariel = {
//     name: 'Ariello',
//     age : 4,
//     race: 'border collie',
//     type: 'dog',
//     'peggiorNemico': 'husky'
// }

// for (const key in ariel) {
//     // if (!Object.hasOwn(object, key)) continue;
    
//     // const element = object[key];
// const value = ariel[key];    
// console.log(key + ' ' + value);
// }
// // NOTAZIONE CON PARENTESI QUADRE
// console.log(ariel.name);
// console.log(ariel['name']);
// console.log(ariel['peggiorNemico']);



//JSON (JAVASCRIPT OBJECT NOTATION)

const Gatto = {
    name: 'Gatto',
    surname: 'Macias',
    age: 3,
    gender: 'male',
    address:{
        street:'via borzoli',
        civic: 8,
        city: 'Genoa',
        country: 'Italy'
    },
    nationality: 'european',
    married: false,
    interests:[
        'sleep',
        'poop',
        'eat'
    ]
}

console.log(Gatto);
const gattoString = JSON.stringify(Gatto);
console.log(gattoString);

const dataString = '{"name": "Andrea","surname":"Asioli", "yob": 1978}'
const data = JSON.parse(dataString);
console.log(data);


