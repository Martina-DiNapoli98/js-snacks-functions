/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const firstLetter = "A";

// Dichiara la funzione qui.
function thisLetter(names, firstLetter){
    let anotherArray = []
    for(let i = 0; i < names.length; i++){
        anotherNames = names[i]
        if(firstLetter === anotherNames[0]){
            anotherArray.push(anotherNames);
        }
    } 
    return anotherArray;
}

// Invoca la funzione qui e stampa il risultato in console
const firstLetterA = thisLetter(names, firstLetter);
console.log(firstLetterA);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]