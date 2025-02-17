/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/* function secretName(names){
    let anotherName = []
    for(let i = 0; i < names.length; i++){
        thisName = names[i]
        anotherName.push(thisName[0]);
    }
    return anotherName;
} */

let secretName = (names) => {
    let anotherName = []
    for(let i = 0; i < names.length; i++){
        thisName = names[i]
        anotherName.push(thisName[0]);
    }
    return anotherName;
}
// Invoca la funzione qui e stampa il risultato in console
let newName = secretName(names);
console.log(newName);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]