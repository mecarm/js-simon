/*
Esercizio
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    -Creare un array Vuoto ✅
    -Creare una funzione per generare numeri random ✅
    -Creare un loop che generi 5 numeri (BONUS: controllare se i numeri sono univoci) ✅
    -Pusho i numeri nell'array vuoto ✅
    -Stampare a schermo i numeri dell'array
    -Far partire il timer di 10 secondi.

Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    -Nascondo i numeri con display none dopo 10 secondi(Usare classList.add)
    -Inserisco un prompt che gira in loop per 5 volte per chiedere i numeri
    -Salvare in un altro array i numeri inseriti da utente.(Si potrebbero inserire solo i numeri che sono uguali in modo da velocizzare il passaggio di controllo.)
    -Controllare i numeri inseriti se corrispondo all'array di num random.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    -Stampare a schermo solo i numeri inseriti correttamente
*/

let arrayRandom = [];

function randomNumber(){
    let randomNum = Math.floor((Math.random() * 100) + 1);
    return randomNum;
}

console.log(randomNumber());

function loopxFive(){
    let x = 0; //variabile contatore
    let num; //variabile soldato
    while( x < 5 ){ //svogli il ciclo finche x arriva a 5
        num = randomNumber(); //svolge la funzione di generare il numero random nella variabile soldato
        if ( !arrayRandom.includes(num) ) { //se l'arrayRandom non include il num generato con la funzione : (continua sotto)
            x++; //vai avanti con il cilo (continua sotto)
            arrayRandom.push(num); // e pusha il num generato nell'arrayRandom
        } 
    } 
    return arrayRandom; 
}

console.log(loopxFive());
