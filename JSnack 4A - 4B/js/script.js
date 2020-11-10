// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [
  {
    'nome' : 'Milan',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Sassuolo',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Roma',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Inter',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Juventus',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  }
];

console.log(squadre);

// STE 2:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

for (var i = 0; i < squadre.length; i++) {

  squadre[i].puntiFatti = puntiFatti(100);
  squadre[i].falliSubiti = falliSubiti(50);
}

console.log(squadre);


squadre.sort(function(a,b) {
  return b.puntiFatti - a.puntiFatti;
});
console.log("Classifica aggiornata:" , squadre);




// FUNZIONI PER NUMERI RANDOM
function puntiFatti(max){
  return Math.floor(Math.random() * Math.floor(max));
};
// console.log(puntiFatti(100));

function falliSubiti(max){
  return Math.floor(Math.random() * Math.floor(max));
};
// console.log(falliSubiti(50));
