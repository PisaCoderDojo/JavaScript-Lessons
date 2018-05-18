/****************************** VARIABILI ***************************/
var isStrict = true;
var playerTurn = false; // DA CREARE
var simonSeq = [];  // DA CREARE
var playedSeq = []; // DA CREARE
var userSeq=[]; // DA CREARE
var level = 1;
var seqIndex=0;
var animInt;
var blueSound = new Howl({ src: 'sounds/simonSound1.mp3' });
var greenSound = new Howl({ src: 'sounds/simonSound2.mp3' });
var pinkSound = new Howl({ src: 'sounds/simonSound3.mp3' });
var yellowSound = new Howl({ src: 'sounds/simonSound4.mp3' });
var aliens = ["blue","green","pink","yellow"]; // DA CREARE
var i = 0;
// DA CREARE
var sound = {
  blue: blueSound, 
  green: greenSound, 
  pink: pinkSound, 
  yellow: yellowSound
};

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

/****************************** FUNZIONI DA COMPLETARE ********************************/
$(document).ready(function() {
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
  
  $('#blue').on('click', function () {
    if(playerTurn){
      backgroundColor('blue', 'blue');
      sound["blue"].play();
      userSeq.push(0);

      setTimeout(function () {
        backgroundColor('blue', 'lightblue');
      }, 200);

      chickenDinner();
    }
  });
  
  $('#green').on('click', function () {
    if(playerTurn){
      backgroundColor('green', 'green');
      sound["green"].play();
      userSeq.push(1);

      setTimeout(function () {
        backgroundColor('green', 'lightgreen');
      }, 200);

      chickenDinner();
    }
   });
  
  $('#pink').on('click', function () {
    if(playerTurn){
      backgroundColor('pink', 'red');
      sound["pink"].play();
      userSeq.push(2);
      
      setTimeout(function () {
        backgroundColor('pink', 'lightpink');
      }, 200);

      chickenDinner();
    }
  });  
  
  $('#yellow').on('click', function () {
    if(playerTurn){
      backgroundColor('yellow', 'yellow');
      sound["yellow"].play();
      userSeq.push(3);

      setTimeout(function () {
        backgroundColor('yellow', 'lightyellow');
      }, 200);
      chickenDinner();
    }
  });  
  
});

// Genera sequenza di gioco.
function generateSeq() {
  var sequence = [];
  for(var i=0; i<20; i++)
    sequence.push(getRng(0,4));
    
  return sequence;
}

function playAlien() {
  animInt = setInterval(function () {
    hideError();    

    var alien = aliens[simonSeq[seqIndex]];

    // Evitare gli operatori binari ?
    backgroundColor(alien, alien != "pink" ? alien : "red");
    sound[alien].play();
    playedSeq.push(simonSeq[seqIndex]);

    setTimeout(function () {
      backgroundColor(alien, "light"+alien);
    }, (level <= 10? 500 : 400));

    seqIndex++;

    if (seqIndex >= level) {
      clearInterval(animInt);
      playerTurn=true;
    }
  }, (level <= 10? 800 : 700));
}

// Controlliamo se abbiamo vinto.
function chickenDinner() {
  if (playedSeq.length == userSeq.length) {
    playerTurn = false;

    // Win.
    if (playedSeq.join() == userSeq.join()) {
      if (level == 20) {
        setTimeout(function () {
          showWin();
          playedSeq = [];
          userSeq = [];
          seqIndex=0;
        }, 1000);
      } 
      else {
        setTimeout(function () { 
          showLevel();
          level++;
          playedSeq = [];
          userSeq = [];
          seqIndex = 0;
          playAlien();
        }, 900);
      }
    } 
    // Lose.
    else {
      if (!(isStrict)) {
        setTimeout(function () {
          showError()
          playedSeq = [];
          userSeq = [];
          seqIndex=0;
          playAlien();
        }, 1000);
      } else {
        setTimeout(function () {
          showError()
          level=1;
          playedSeq = [];
          userSeq = [];
          seqIndex = 0;
          simonSeq = generateSeq();
          playAlien();
        }, 1000);
      }
    }
  }
}