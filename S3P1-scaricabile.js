/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(x, y) {
    if (x === y) {
        return (x + y) * 3 

    } else {
        return x + y
    }
}
console.log(crazySum(5, 5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.

*/
function boundary (a) {
    if(  a >= 20 &&  a <= 100   || a === 400   ) {
        return true
    } else {
        return false
    }
  
}
console.log(boundary(401))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
let string = "";
function reverseString(string) {
  return string.split("").reverse().join("").toUpperCase()
}
console.log(reverseString("INTER"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/ 

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirst("molla"));

 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
 function giveMeRandom(n) {
    return Math.floor(Math.random()*n)
    
 }
 console.log(giveMeRandom(10))
/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area (l1, l2 ){
    return   l1 * l2 
}
console.log( area(5,4))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


function crazyDiff(x) {
    let diff = x - 19;
    if (diff > 19) {
        return diff * 3;
    } else {
        return diff;
    }
}
console.log(crazyDiff(49));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string) {
    if (string.startsWith("code")) {
        return string
    } else {
        return string = "code" + string;
    } 
}
console.log(codify("ciao"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(f) {
    if (f % 3 === 0 || f % 7 === 0) {
        return true;
    } else {
        return false
    }

}
console.log(check3and7(5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
function cutString(string) {
    return string.slice(1, -1)
}
console.log(cutString("palermo"))
/* SCRIVI QUI LA TUA RISPOSTA */

