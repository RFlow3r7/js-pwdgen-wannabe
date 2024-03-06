
let nome = prompt("Digita il tuo nome:");

let cognome = prompt("Digita il tuo cognome:");

let colorePreferito = prompt("Digita il tuo colore preferito:");

let numeroCasuale = Math.floor(Math.random() * 100);

let password = nome + cognome + colorePreferito + numeroCasuale;

console.log("La tua password generata è:", password);
