// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà

var davide = {
  "nome" : "Davide",
  "cognome" : "Fiore",
  "età" : "27",
}

for (var key in davide) {
  // document.writeln(davide[key]);
  console.log(davide[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var antonio = {
  "nome" : "Antonio",
  "cognome" : "Rossi",
  "età" : "28",
}

var federico = {
  "nome" : "Federico",
  "cognome" : "Verdi",
  "età" : "26",
}

var classe = [davide, antonio, federico];




for (var i = 0; i < classe.length; i++) {
  document.writeln(classe[i].nome);
  document.writeln(classe[i].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var utente = {
  "nome" : prompt("Nome"),
  "cognome" : prompt("Cognome"),
  "età" : prompt("Età"),
}

classe.push(utente);
console.log("Nuova classe: ", classe);
