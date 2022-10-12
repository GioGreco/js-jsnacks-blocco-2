"use strict";

const exs = document.querySelectorAll('.snack-right');
console.log(exs);

const snacks = document.querySelectorAll('i');

for(let s = 0; s < snacks.length; s++){
    snacks[s].addEventListener('click', function(){
        exs[s].classList.toggle('d-none');
    })
}

//snack 1 : Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo;
const oddEven = document.createElement('input')
exs[0].append(oddEven);
oddEven.type = 'text';
oddEven.placeholder = '---';

const btn1 = document.createElement('button');
exs[0].append(btn1);
btn1.innerText = 'STAMPA';

const result1 = document.createElement('div');
btn1.append(result1);
result1.className = 'result1';

function printEven(){
    let value1 = parseInt(oddEven.value);
    if(isNaN(value1)){
        alert('Devi inserire un numero!');
    }
    else if(value1 % 2 == 0){
        result1.innerHTML = `<i class="fa-solid fa-arrow-right"></i>${value1}`;
    }
    else{
        result1.innerHTML = `<i class="fa-solid fa-arrow-right"></i>${value1 + 1}`;
    }
}

btn1.addEventListener('click', printEven);

//snack 2 : Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


//snack 3 : Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const genArray = document.createElement('input');
exs[2].append(genArray);
genArray.type = 'text';

const btn3 = document.createElement('button');
exs[2].append(btn3);
btn3.innerText = 'SOMMA DISPARI'

const result3 = document.createElement('div');
exs[2].append(result3);
result3.className = 'result3'

function sumOdd(){
    let value3 = parseInt(genArray.value);
    let fullArray = [];
    let somma = 0;
    if(isNaN(value3)){
        alert('Devi inserire un numero!');
    }
    else{
        for(let i = 0; i < value3; i++){
            fullArray.push(Math.floor(Math.random()*101));
            if(i % 2 == 0){
                somma += fullArray[i];
            }
        }
        result3.innerHTML = `La somma degli elementi in <u>posizione dispari</u> della tua lista casuale &eacute; pari a = ${somma}<div>la composizione dell'array è stata stampata in console.</div>`
        console.log(fullArray);
        console.log(somma);
    }
}

btn3.addEventListener('click', sumOdd);
//snack 4 : Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
const input1 = exs[3].querySelector('.array1');
const val1 = document.createElement('input');
input1.append(val1);
val1.type = 'text';

const input2 = exs[3].querySelector('.array2');
const val2 = document.createElement('input');
input2.append(val2);
val2.type = 'text';

const btn4 = document.createElement('button');
exs[3].append(btn4);
btn4.innerText = 'EGUAGLIA LUNGHEZZA'

function equalize(){
    let arrayLength1 = parseInt(val1.value);
    let arrayLength2 = parseInt(val2.value);
    let array1 = [];
    let array2 = [];
    const originalArray1 = document.querySelector('.array1-items');
    const originalArray2 = document.querySelector('.array2-items');
    const finalArray1 = document.querySelector('.new-array1');
    const finalArray2 = document.querySelector('.new-array2');
    originalArray1.innerHTML = `ARRAY 1:`;
    originalArray2.innerHTML = `ARRAY 2:`;
    finalArray1.innerHTML = `NUOVO ARRAY 1:`;
    finalArray2.innerHTML = `NUOVO ARRAY 2:`;
    for(let w = 0; w < arrayLength1; w++){
        array1.push(Math.floor(Math.random()*101));
    };
    for(let z = 0; z < arrayLength2; z++){
        array2.push(Math.floor(Math.random()*101));
    }
    //stampo originali
    for(let f = 0; f < array1.length; f++){
        originalArray1.innerHTML += `<span>${array1[f]}</span>`;
    }
    for(let g = 0; g < array2.length; g++){
        originalArray2.innerHTML += `<span>${array2[g]}</span>`;
    }
   
    if(array1.length > array2.length){
        do{
            array2.push(array1.pop());
        }
        while(array1.length > array2.length);
    }
    else if(array1.length < array2.length){
        do{
            array1.push(array2.pop());
        }
        while(array1.length < array2.length);
    }
    else{
        result4.innerHTML = `I due array sono già della stessa lunghezza!`
    }
    // stampo modifica
    for(let r = 0; r < array1.length; r++){
        finalArray1.innerHTML += `<span>${array1[r]}</span>`;
    }
    for(let t = 0; t < array2.length; t++){
        finalArray2.innerHTML += `<span>${array2[t]}</span>`;
    }
    console.log(array1, array2);
}

btn4.addEventListener('click', equalize);