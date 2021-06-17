// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10     


var palla = {
    item : "Palla",
    peso: "10"
}

// Snack1. - la continua.
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = prompt("inserisci il nuovo peso");

// Snack 1. - la vendetta.
// Inserire  l’oggetto palla in una array var giochi = [];

var giochi = []

giochi.push ({
    palla
})

// Snack 1 - la conclusione per davvero.
// Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

var itemNew = prompt('Inserisci l\'attrezzo');
var pesoNew = prompt('Inserisci il peso dell\'attrezzo');


giochi.push({
    item: itemNew,
    peso: pesoNew
});






