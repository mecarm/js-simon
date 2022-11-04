/*
Esercizio
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    -Creare un array Vuoto ✅
    -Creare una funzione per generare numeri random ✅
    -Creare un loop che generi 5 numeri (BONUS: controllare se i numeri sono univoci) ✅
    -Pusho i numeri nell'array vuoto ✅
    -Stampare a schermo i numeri dell'array ✅

Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    -Nascondo i numeri con display none dopo 10 secondi(Usare classList.add) ✅
    -Inserisco un prompt che gira in loop per 5 volte per chiedere i numeri ✅
    -Salvare in un altro array i numeri inseriti da utente.(Si potrebbero inserire solo i numeri che sono uguali in modo da velocizzare il passaggio di controllo.) ✅
    -Controllare i numeri inseriti se corrispondo all'array di num random.✅

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    -Stampare a schermo solo i numeri inseriti correttamente 
*/

let arrayRandom = [];
let arrayPrompt = [];

function randomNumber(){
    let randomNum = Math.floor((Math.random() * 100) + 1);
    return randomNum;
}

console.log(randomNumber());

function loopxFive(){
    let x = 0; 
    let num; 
    while( x < 5 ){ 
        num = randomNumber(); 
        if ( !arrayRandom.includes(num) ) { 
            x++; 
            arrayRandom.push(num); 
        } 
    } 
    return arrayRandom; 
}

function printFor5second(){
    document.getElementById('print').innerText = loopxFive();
    setTimeout(nascondiNumeri, 5000);
    setTimeout(whatNumberIs, 7000)
    
}

function nascondiNumeri(){
    document.getElementById('print').classList.add('none');
}

function whatNumberIs(){
    let promptNum; 
    let x = 0; 
    while( x < 5 ){ 
        promptNum = parseInt(prompt('Inserisci un numero che ricordi')); 
        if ( !arrayPrompt.includes(promptNum) == arrayRandom.includes(promptNum)) { 
            arrayPrompt.push(promptNum);
        }
        x++
    }
    document.getElementById('print').classList.remove('none');
    return document.getElementById('numCorretti').innerText = `Il punteggio è: ${arrayPrompt.length}.  I numeri corretti da te inseriti sono : ${arrayPrompt}`;
}










