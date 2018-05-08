// Commento lina singola
/* Un commento
multi riga */

// Numeri ed operatori
1 + 2; // = 3
6 - 1; // = 5
5 * 2; // = 10
42 / 6; // = 7

// Tipi booleani
true;
false;

// Negare con ! 
!true; // = false
!false; // = true

// Uguaglianza ===
1 === 1; // = true
2 === 1; // = false

// Disuguaglianza !==
1 !== 1; // = false
2 !== 1; // = true

// Confronti
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Stringe
'ninja';
"Coder Dojo";

"CoderDojo " + "Pisa!"; // = "CoderDojo Pisa!"
"CoderDojo 30".charAt(0);  // = 'C'
"Pisa"[1] = // = 'i'
"Coder Dojo!".substring(0, 5); // = "Coder"
"Dojo".length; // = 4
"CoderDojo Pisa".toUpperCase(); // = "CODERDOJO PISA"
"CoderDojo Pisa".toUpperLowerCase(); // = "coderdojo pisa"

// Variabili
var ninja = 20;
var mentori; // = undefined

ninja += 2; // equivalente di ninja = ninja + 5;
ninja *= 5; // ninja = ninja * 5;
ninja++; // incrementa ninja di 1
ninja--; // decrementa ninja di 1

// Operatori logici
var fineSettimana = false, docciaFatta = true, hoUnaMela = false, hoUnArancia = true;
var vaiAScuola = !fineSettimana && docciaFatta && (hoUnaMela || hoUnArancia); // = true

// Array
var colori = ["rosso", "verde", "giallo"]; 
colori[0]; // = "rosso" 
colori.length; //= 3
colori.push("blu"); // length è 4 ora
colori.pop(); // "rosso" length 3
colori[3] = "rosso"; // ["verde", "giallo", "blu", "rosso"]
var tantiColori = colori.concat(["bianco","nero"], ["viola","arancione"]); // concatenzione
colori.indexOf("rosso"); // = 3
colori.join('-'); // = "verde-giallo-blu-rosso"

// Progettino n°1

var frasi = [  
  "Questo suona bene",  
  "Si, dovresti farlo sicuramente",  
  "Non sono sicuro sia una buona idea",  
  "Forse un altro giorno?",  
  "Computer dice no." 
];
// Dovrei bere un altro frullato? 
frasi[Math.floor(Math.random() * 5)]; //= "Non sono sicuro sia una buona idea" 
// Should I do my homework? 
frasi[Math.floor(Math.random() * 5)]; //= "Forse un altro giorno?"

// Progettino n°2

var partiDelCorpo = ["Volto", "Naso", "Taglio di Capelli", "Mento"]; 
var aggettivi = ["Puzzolente", "Noiosa", "Sciocca"]; 
var parole = ["Mosca", "Marmotta", "Farfalla", "Scimmia"];
var randomCorpo = partiDelCorpo[Math.floor(Math.random() * 3)]; 
var randomAggettivo = randomAdjectives[Math.floor(Math.random() * 3)]; 
var randomParola = randomWords[Math.floor(Math.random() * 5)]; 
var randomInsulto = "Il tuo " + randomCorpo + " è come una " + randomAggettivo + " " + randomParola + "!!!"; 
randomInsult; //= "Il tuo Naso è come una Sciocca Marmotta!!!"
//var randomParola = parole[Math.floor(Math.random() * parole.length)];
//var randomInsulto = ["Il tuo", randomCorpo, "è", "come", "una", randomAggettivo, randomParola + "!!!"].join(" ");



// JavaScript nel HTML
<!DOCTYPE html> 
<html> 
  <head>    
    <title>
      My first proper HTML page
    </title> 
  </head>
  <body>    
    <h1>Ciao Dojo!</h1>    
    <p>La mia prima pagina.</p>    
    <script>    
      var messaggio = "Ciao Dojo!";    
      console.log(messaggio);    
    </script> 
  </body> 
</html>

// if ... else
if (condizione){  
  console.log("Fa qualcosa"); 
} else if (altraCondizione){  
  console.log("Fa un altra cosa"); 
} else {  
  console.log("Fa qualcosa'altro!"); 
}

// while
while (condizione) {  
  console.log("Fa qualcosa");  
  i++; 
}

// for
for (setup; condizione; incremento) {  
  console.log("Fa qualcosa"); 
} 

// prompt , confirm , alert
var nome = prompt("Qual'è il tuo nome?"); 
console.log("Ciao " + nome);
var piaccionoGatti = confirm("Ti piacciono i gatti?"); 
if (piaccionoGatti) {  
  console.log("Sei un gatto in gamba!"); 
} else {  
  console.log("Va bene... Sei comunque ingamba!"); 
}
alert("JavaScript è fantastico!");


// Progetto n°3

<!DOCTYPE html> 
<html> 
  <head>    
    <title>Impiccato!</title> 
  </head>
  <body>    
  <h1>Impiccato!</h1>
  <script>    
  // Crea un array di parole    
  var parole = [      
    "javascript",      
    "scimmia",      
    "dojo",      
    "ninja"    
  ];
    // scegli una parola a caso    
  var parola = parole[Math.floor(Math.random() * parole.length)];
    // inizializza rispostaArray    
  var rispostaArray = [];    
  for (var i = 0; i < parola.length; i++) {      
    rispostaArray[i] = "_";    
  }
  var lettereRimanenti = parola.length;
    // ciclo del gioco    
  while (lettereRimanenti > 0) {      
    // mostra il progresso al giocatore     
    alert(rispostaArray.join(" "));
      // ottieni tentativo dal giocatore      
    var guess = prompt("Indovina una lettera, o clicca Cancel per smettere di giocare.");      
    if (guess === null) {        
      // esci dal ciclo del gioco        
      break;      
    } else if (guess.length !== 1) {        
      alert("Per favore entra una singola lettera.");      
    } else {        
      // aggiorna lo stato del gioco        
      for (var j = 0; j < parola.length; j++) {          
        if (parola[j] === guess) {            
          rispostaArray[j] = guess;            
          lettereRimanenti--;          
        }        
      }      
    }
    // fine del ciclo del gioco   
  }
    // mostra risposta e congratulati con il player    
  alert(rispostaArray.join(" "));    
  alert("BEN FATTO! La risposta era " + parola);    
  </script> 
  </body> 
</html>
 // Challenges: -1) più parole -2) lettere maiuscole -3) Limite tentativi -4) Bug: lettereRimanenti decrementa se indovini la stessa lettera

