// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

var palla = {
  'Nome' : 'palla',
  'Peso' : 10
}
console.log(palla);

// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var nuovoPeso = parseInt(prompt('Inserisci nuovo peso palla'));

palla.Peso = nuovoPeso;
console.log(palla);
