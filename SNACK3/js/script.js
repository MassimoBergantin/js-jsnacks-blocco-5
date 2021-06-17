// Snack 3 - 1^ parte.
// Creare un array con tre numeri, calcolare la media di questi tre numeri.


// var numbers = [22,44,76];

// var totale = 0;

// for(var i = 0; i < numbers.length; i++) {
//     totale += numbers[i];
// }
// var average = totale / numbers.length;

// console.log (Math.round(average));






// Snack 3 - 2^ parte.
// Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio
// Calcolare il punteggio medio dei tre giocatori.



var team = [
    {nome: "Ottavio", cognome: "Fogliata",anno: "1990", punteggio: 5},
    {nome: "Ringhio", cognome: "Zanella",anno: "1980", punteggio: 7},
    {nome: "Anna", cognome: "Degio",anno: "1991", punteggio: 10}
]



var totale = 0;

for (var i = 0; i < team.length; i++) {
    totale += team[i].punteggio;
}
var avg =  totale / team.length;

console.log(Math.round(avg));
