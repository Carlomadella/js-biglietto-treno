let journeyLenght = parseInt(prompt("Indica i kilometri che vuoi percorrere con questo treno?"));
let passengerAge = parseInt(prompt("Indica l'età del passengero"));
let priceKm = 0.21;

// console.log(journeyLenght)
// console.log(passengerAge)

let prezzoIntero = (parseInt(priceKm * journeyLenght));

// console.log("Il prezzo finale è di", prezzoIntero, "€");

let prezzoUnder;
let prezzoOver;

if (passengerAge<18) {
    prezzoUnder = (prezzoIntero-( 20/100 ))
    console.log("Il prezzo del biglietto è scontato del 20%, perciò il totale sarà di", prezzoUnder, "€")
} 
else if (passengerAge>65){
    prezzoOver = (prezzoIntero-( 40/100 ))
    console.log("Il prezzo del biglietto è scontato del 40%, perciò il totale sarà di", prezzoOver, "€")
}


