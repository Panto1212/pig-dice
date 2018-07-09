//backend logic

//generating the random numbers of the dice
var diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}

//player constructor
function Player(status) {
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
  } else {
    this.turnscore += this.roll;
  }
}

//in the event that the player decides to hold
Player.prototype.hold = function() {
  this.totalscore += this.turnscore;
  this.turnscore = 0;
}

//when a player reaches 100
Player.prototype.win = function() {
  if (this.totalscore >= 100) {
    alert(this.name + "wins the game!")
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


  $("span#start").click(function(event) {
    $("div.game-mode").show();
    $("div.playernames").hide();
    $("span#start").hide();

    player1 = new Player(true);
    player2 = new Player(false);

    var player1input = $("input#player1").val();
    $("h3.player1").append(player1input);

    var player2input = $("input#player2").val();
    $("h3.player2").append(player2input);

    player1.name = player1input;
    player2.name = player2input;

  });

  $("span#roll1").click(function(event) {
    player1.roll = diceRoll();
    $("span#rollnumber-1").text(player1.roll);
    player1.rolling1();
    $("span#turnpoints-1").text(player1.turnscore);
  });

  $("span#roll2").click(function(event) {
    player2.roll = diceRoll();
    $("span#rollnumber-2").text(player2.roll);
    player2.rolling1();
    $("span#turnpoints-2").text(player2.turnscore);
  });

  $("span#hold1").click(function(event) {
    player1.hold();
    $("span#totalpoints-1").text(player1.totalscore);
    $("span#rollnumber-1").empty();
    $("span#turnpoints-1").empty();
    player1.win();
  });

  $("span#hold2").click(function(event) {
    player2.hold();
    $("span#totalpoints-2").text(player2.totalscore);
    $("span#rollnumber-2").empty();
    $("span#turnpoints-2").empty();
    player2.win();
  });
});
