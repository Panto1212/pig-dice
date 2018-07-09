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
    var player1input = $("input#player1").val();
    $("div.player1").empty();
    $("p#player1").append(player1.name + " is Ready!");
    $("form#player2").show();
  });


  $("form#player2").submit(function() {
    event.preventDefault();
    var player2input = $("input#player2").val();
    $("div.player2").empty();
    $("p#player2").append(player2.name + " is Ready!");
    $("span#start").show();
  });

$("span#start").click(function() {
  $("div.game-mode").show();
  $("div.playernames").hide();
  $("span#start").hide();
  var player1 = new Player(true);
  var player2 = new Player(false);
});



  $("span.roll").click(function() {
    $("#turn-points").text(random).val();
  });
});
