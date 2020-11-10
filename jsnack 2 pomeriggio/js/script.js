// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
console.log(arrayObj);

// copia array di partenza a cui aggiungere position
var arrayObj2 = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// ciclo arrayObj2 e inserisco per ogni oggetto index, nuova proprietà position e lettera random ricavata da funzione
for (var i = 0; i < arrayObj2.length; i++) {
  var position = randomLetter(1);
  arrayObj2[i].position = position;
}

console.log(arrayObj2);

// FUNZIONE per ottenere lettera random da inserire in position
function randomLetter(lettera) {
   var result = '';
   var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var lettereLength = lettere.length;
   for ( var i = 0; i < 1; i++ ) {
      result = lettere.charAt(Math.floor(Math.random() * lettereLength));
   }
   return result;
}

// console.log(randomLetter(1));
