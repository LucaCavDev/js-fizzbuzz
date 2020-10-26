
for (var i = 1; i <= 100; i++) {
  //creo variabile vuota che riempio nel caso ci siano le condizioni)
  var vuota = "";
  if ( i % 3 == 0) {
    vuota += "Fizz";
  }
  if ( i % 5 == 0) {
    vuota += "Buzz";
  }//in questo modo fizz e buzz vanno nella stessa variabile se accadono entrambe e non su due linee diverse
  if ( vuota == "") {
    vuota = i;
  }
  console.log(vuota);
  document.getElementById('lista').innerHTML += '<li>' + vuota + '</li>';


}



// cosi il codice è molto piu mantenibile, perchè a una variabile vuota io aggiungo fizz se è multiplo di 3, aggiungo 5 se è multiplo di 5 mentre invece se resta vuota e dunque non è multiplo di 3 o 5, la variabile vuota esprimerà il valore i corrispondente al singolo loop
