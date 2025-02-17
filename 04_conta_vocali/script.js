/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/* function quanteVocali(word){
    let vocali = 0;
    for(let i = 0; i < word.length; i++){
        lettere = word[i]
        if(lettere === "a"|| lettere === "e" || lettere === "i" || lettere === "o" || lettere === "u"){
            vocali++
        }
    }
    return vocali
} */

const quanteVocali = word =>{
    let vocali = 0;
    for(let i = 0; i < word.length; i++){
        lettere = word[i]
        if(lettere === "a"|| lettere === "e" || lettere === "i" || lettere === "o" || lettere === "u"){
            vocali++
        }
    }
    return vocali
}


// Invoca la funzione qui e stampa il risultato in console
const numeroVocali = quanteVocali(word);
console.log(`ci sono ${numeroVocali} vocali`);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)