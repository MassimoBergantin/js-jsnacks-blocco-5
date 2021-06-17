//Snack 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area e stampare il risultato con console.log
var triangolo = {
    base: 50,
    altezza: 100
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2))
console.log(Math.round(ipotenusa));


var perimetro = ipotenusa + triangolo.base +  triangolo.altezza 
console.log(Math.round(perimetro));

var area = (triangolo.base * triangolo.altezza) / 2
console.log(Math.round(area));



//Math.sqrt serve a calcolare la radice quadrata Math.sqrt(9) darà 3


//Math.pow per le potenze 