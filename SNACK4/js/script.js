// Snack 4 - 
// Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione

// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

// {
//   nome: 'Pippo',
//   cognome: 'Baudo',
//   age: 80,
//   descrizione: ''
// } 

// Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

// Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

// Bonus
// Visualizzare nell’html questi dati in una forma tabellare.



var students = [
    {
        Nome : "Massimo",
        Cognome : "Bergantin",
        Anni : 25,
        Descrizione : ""
    },
    {
        Nome : "Mirco",
        Cognome : "Tioli",
        Anni : 35,
        Descrizione : ""
    },
    {
        Nome : "Roberto",
        Cognome : "Bassani",
        Anni : 55,
        Descrizione : ""
    }
]

for (var i = 0; i < students.length; i++) {
    var description = students[i].Descrizione = prompt('Inserisci descrizione per ' + students[i].Nome + ' ' + students[i].Cognome);
    students[i].Descrizione = description;
  }


   for (var x = 0; x < students.length; x++) {
  
    for ( var key in students[x]) {
      console.log(key, students[x][key]);
    }
    
}