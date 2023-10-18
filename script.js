//chiendo le info all'utente
const username = prompt("Scrivi il tuo username");
const age = prompt("Scrivi la tua età");
console.log(age, typeof age);

const nkm = prompt("Scrivi il numero di km che devi percorrere");
console.log(nkm, typeof nkm);

//preparo gli sconti
const priceForKm = 0.21;
const over = 0.60;
const min = 0.8;

//preparo il prezzo scontato
let price = nkm * priceForKm;

if (age > 65) {
    price = price * over;
}
 else if (age < 18) {
    price = price * min;
}

console.log(price);

//forzo 2 cifre decimali
price = price.toFixed(2);

//preparo messaggio per html
const message =  `
    <h2>Ciao ${username}!</h2>
    <p>Ecco il prezzo del tuo biglietto per ${nkm} Km: 
        <span style="color: red;">${price} euro</span>
    </p>
`;

//stampo risultato

// document.getElementById("result").innerHTML = price;

const resultElem = document.getElementById("result");
console.log(resultElem.innerHTML);
resultElem.innerHTML = resultElem.innerHTML + message;