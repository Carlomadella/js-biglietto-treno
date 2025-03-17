let journeyLenght = parseInt(prompt("Indica i kilometri che vuoi percorrere con questo treno?"));
let passengerAge = parseInt(prompt("Indica l'età del passengero"));
let priceKm = 0.21;

console.log(journeyLenght)
console.log(passengerAge)

let prezzoIntero = (parseInt(priceKm * journeyLenght))

console.log("Il prezzo finale è di", prezzoIntero, "€");

