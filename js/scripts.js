//backend logic

//generating the random numbers of the dice
var diceRoll = function() {
  var random = Math.floor(Math.random() * 6 + 1);
}

//player constructor
var Player = function(status) {
  this.name;
  this.turnscore = 0;
  this.totalscore = 0;
  this.status = status;
  this.roll = 0;
}

//in the event that a 1 is rolled,
Player.prototype.rolling1 = function() {
  if (this.roll === 1) {
    this.turnscore = 0;
    this.turn = false;
  } else {
    this.turnscore += this.roll;
  }
}

//in the event that the player decides to hold
Player.prototype.hold = function() {
  this.totalscore += this.turnscore;
  this.turnscore = 0;
}

//when a player wins
Player.prototype.win = function() {
  if(this.totalscore >= 100) {
    alert(this.name + "wins the game!")
  } else {
    this.totalscore += this.turnscore;
  }
}



//frontend logic
$(document).ready(function() {
  $("form#player1").submit(function() {
    event.preventDefault();
    $("div.player1").empty();
    $("p#player1").append("Player 1 is Ready!");
    $("form#player2").show();
  });


  $("form#player2").submit(function() {
    event.preventDefault();
    $("div.player2").empty();
    $("p#player2").append("Player 2 is Ready!");
    $("span#start").show();
  });


$("span#start").click(function() {
  $("div.game-mode").show();
  $("div.playernames").hide();
  $("span#start").hide();
  var player1 = new Player(true);
  var player2 = new Player(false);
});

var player1input = $("input#player1").val();
$("h3.player1").append(player1input);
player1.name = player1input;

var player2input = $("input#player2").val();
$("h3.player2").append(player2input);
player2.name = player2input;

  $("span.roll1").click(function(event) {
    player1.roll = diceRoll();
    $("span#rollnumber-1").text(player1.roll);
    player1.rolling1();
    $("span#turnpoints-1").text(palyer1.turnscore);
  });

  $("span.roll2").click(function(event) {
    player2.roll = diceRoll();
    $("span#rollnumber-2").text(player2.roll);
    player2.rolling1();
    $("span#turnpoints-2").text(palyer2.turnscore);
  });
});
