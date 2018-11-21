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

/**
** Stringe
**/
'ninja';
"Coder Dojo";
"CoderDojo " + "Pisa!"; // = "CoderDojo Pisa!"
"Pisa"[1] = // = 'i'
"Coder Dojo!".substring(0, 5); // = "Coder"
"Dojo".length; // = 4
"CoderDojo Pisa".toUpperCase(); // = "CODERDOJO PISA"
"CoderDojo Pisa".toLowerCase(); // = "coderdojo pisa"

/**
** Variabili
**/
var ninja = 20;
var mentori; // = undefined

ninja += 2; // equivalente di ninja = ninja + 5;
ninja *= 5; // ninja = ninja * 5;
ninja++; // incrementa ninja di 1
ninja--; // decrementa ninja di 1

/**
** Operatori logici
**/
var fineSettimana = false, docciaFatta = true, hoUnaMela = false, hoUnArancia = true;
var vaiAScuola = !fineSettimana && docciaFatta && (hoUnaMela || hoUnArancia); // = true

/**
** Array
**/
var colori = ["rosso", "verde", "giallo"]; 
colori[0]; // = "rosso" 
colori.length; //= 3
colori.push("blu"); // length è 4 ora
colori.pop(); // "rosso" length 3
colori[3] = "rosso"; // ["verde", "giallo", "blu", "rosso"]
var tantiColori = colori.concat(["bianco","nero"], ["viola","arancione"]); // concatenzione
colori.indexOf("rosso"); // = 3
colori.join('-'); // = "verde-giallo-blu-rosso"

/**
** if ... else
**/
if (condizione){  
  console.log("Fa qualcosa"); 
} else if (altraCondizione){  
  console.log("Fa un altra cosa"); 
} else {  
  console.log("Fa qualcosa'altro!"); 
}

/**
** while
**/
while (condizione) {  
  console.log("Fa qualcosa");  
  i++; 
}

/**
** for
**/
for (setup; condizione; incremento) {  
  console.log("Fa qualcosa"); 
} 

/**
** prompt , confirm , alert
**/
var nome = prompt("Qual'è il tuo nome?"); 
console.log("Ciao " + nome);
var piaccionoGatti = confirm("Ti piacciono i gatti?"); 
if (piaccionoGatti) {  
  console.log("Sei un gatto in gamba!"); 
} else {  
  console.log("Va bene... Sei comunque ingamba!"); 
}
alert("JavaScript è fantastico!");

/**
// Funzioni:	
**/
function nome(parametro1, parametro2, parametro3) {
    codice da eseguire
}

/**
Disegna quanti gatti vuoi!! 
**/
function disegnaGatti(quanteVolte){		
  for(var i	= 0; i < quanteVolte; i++){				
    console.log(i + " =^.^=");		
  } 
};
disegnaGatti(10);	