//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// IGNORA QUI /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/****************************** VARIABILI ***************************/
var isStrict = true;
var level = 1;
var seqIndex=0;
var animInt;
var blueSound = new Howl({ src: 'sounds/simonSound1.mp3' });
var greenSound = new Howl({ src: 'sounds/simonSound2.mp3' });
var pinkSound = new Howl({ src: 'sounds/simonSound3.mp3' });
var yellowSound = new Howl({ src: 'sounds/simonSound4.mp3' });

/****************************** UTILITY ********************************/
// Colora lo sfondo di un alieno.
function backgroundColor(alien, color){
  $('#' + alien).css("background-color", color);
}

// Genera numeri random.
function getRng(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Mostra messaggio di errore.
function showError(){
  $('#score').text('!!');
  $('#score').css("color","red");
  $('.alien').css("border-color","orange");
}

// Nascondi messaggio di errore.
function hideError(){
  if($('#score').text()=="!!") {
    $('#score').text(level);
    $('#score').css("color","black");
    $('.alien').css("border-color","darkgrey");
  }
}

// Mostra messaggio di vittoria.
function showWin(){
  $('#score').text('Winner Winner Chicken Dinner!');
  $('.alien').css("border-color","purple");
}

// Mostra il livello corrente.
function showLevel(){
  $('#score').text(level + 1);
}

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// COMPLETIAMO QUI ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/****************************** VARIABILI *******************************/


/****************************** FUNZIONI ********************************/
$(document).ready(function() {
  /******************* IGNORA DA QUI ***********************/
  $('#start').on('click', function () {
    level=1;
    $('#score').text(level);
    $('.alien').css("border-color","darkgrey");
    simonSeq = generateSeq();
    playAlien();
  });
  
  $('.strict').on("change", function() {
    isStrict = $(this).prop('checked');
  });
  /******************* A QUI ***********************/
  

  // Cosa succede quando premiamo i bottoni?
  $('#blue').on('click', function () {
    // Cosa succede quando si preme sul blu?
  });
  
  $('#green').on('click', function () {
    // Cosa succede quando si preme sul verde?
   });
  
  $('#pink').on('click', function () {
    // Cosa succede quando si preme sul rosa?
  });  
  
  $('#yellow').on('click', function () {
    // Cosa succede quando si preme sul giallo?
  });  
  
});

// Genera sequenza di gioco.
function generateSeq() {

}

// Fai suonare gli alieni.
function playAlien() {
  
}

// Controlliamo se abbiamo vinto.
function chickenDinner() {
  
}