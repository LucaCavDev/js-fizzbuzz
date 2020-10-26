// FizzBuzz  -   RICHIESTA ESERCIZIO
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano (o meglio ancora in inglese se vi ci trovate) per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”


// ESERCIZIO    -
// SOLUZIONE 1 A STRINGA 61

// creiamo un loop,  da 1 a 100 e vediamo se si stampa in consolelog

// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

// questo loop funziona, mi stampa in console da 1 a 100
// -------------------------------------------------------------------------------
// adesso provo a modificarlo con gli if per far uscire fizz (x3)
// uso i % 3 = 0   vuol dire che i diviso per 3 da 0 come numeri dopo la virgola, quindi i è un multiplo di 3.


// l'utilizzo di % == 0 mi svolta tecnicamente come fare l'esercizio, vediamo poi le condizioni
// concludo con i % 3 != (diverso) in modo che stampi i numeri che non sono multipli di 3


// for (var i = 1; i <= 100; i++) {
//   if ( i % 3 == 0 ) {
//     console.log("Fizz");
//   }
//   if (i % 3 != 0) {
//     console.log(i);
//   }
// }

//____________________________________________________________________________________

// ok esce fizz nei multipli di 3. aggiungo la condizione 5 e con 3 e 5 he valgono entrambi usando &&


// for (var i = 1; i <= 100; i++) {
//   if ( i % 3 == 0 ) {
//     console.log("Fizz");
//   }
//   if ( i % 5 == 0 ) {
//     console.log("Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0){
//     console.log("FizzBuzz");
//   }
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i);
//   }
// }

// in questo modo sul 15 mi stampa fizz - buzz - fizzbuzz. e lo fa perchè la condizione if riguarda il singolo pezzo di condice senza venire influenzato dagli altri if.  provo a escludere i fizz e i buzz in caso valgano entrambi contemporaneamente assegnando ai multipli di 5 e 3 else if, che si attiva solo se la prima condizione nella quale l'i sia multiplo di 3 e 5 non venga rispettata

for (var i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
    document.getElementById('lista').innerHTML += '<li>' + 'FizzBuzz' + '</li>';

  }
  else if ( i % 3 == 0 ) {
    console.log("Fizz");
    document.getElementById('lista').innerHTML += '<li>' + 'Fizz' + '</li>';
  }
  else if ( i % 5 == 0 ) {
    console.log("Buzz");
    document.getElementById('lista').innerHTML += '<li>' + 'Buzz' + '</li>';

  }
  else {
    console.log(i);
    document.getElementById('lista').innerHTML += '<li>' + i + '</li>';
  }
}
