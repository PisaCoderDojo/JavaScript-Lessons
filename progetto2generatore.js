// Progettino n°2 Generatore di Insulti

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

/* 
Challenges :
-1) nuove parole; 
-2) più sofisticati (“Il tuo [parte del corpo] è più [aggettivo] di un [parte del corpo di animale] di [animale] .”; 
-3) usa join; 
*/
