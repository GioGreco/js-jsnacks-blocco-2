"use strict";

const exs = document.querySelectorAll('.snack-right');
console.log(exs);

//snack 1 : Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo;
const oddEven = document.createElement('input')
exs[0].append(oddEven);
oddEven.type = 'text';

const btn1 = document.createElement('button');
exs[0].append(btn1);
btn1.innerText = 'odd or even';

const result1 = document.createElement('div');
exs[0].append(result1);
result1.className = 'result1';

function printEven(){
    let value1 = parseInt(oddEven.value);
    if(isNaN(value1)){
        alert('Devi inserire un numero!');
    }
    else if(value1 % 2 == 0){
        result1.innerHTML = `${value1}`;
    }
    else{
        result1.innerHTML = `${value1 + 1}`;
    }
}

btn1.addEventListener('click', printEven);

//snack 2 : Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
//snack 3 : Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
//snack 4 : Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.