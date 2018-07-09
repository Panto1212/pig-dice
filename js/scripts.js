//backend logic

//generating the random numbers of the dice
var diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}

//player constructor
function Player(name) {
  this.name= name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.status;
  this.rollNumber = 0;
}

//in the event that a 1 is rolled,
Player.prototype.rolling1 = function() {
  if (this.rollNumber === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += this.rollNumber;
  }
}

//in the event that the player decides to hold
Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

//when a player reaches 100
Player.prototype.win = function() {
  if (this.totalScore >= 100) {
    this.totalScore += this.turnScore
    alert(this.name + "wins the game!")
  }
}


//frontend logic
$(document).ready(function() {

  $("form#player1").submit(function() {
    event.preventDefault();
    $("div.player1").hide();
    $("p#player1").append("Player 1 is Ready!");
    $("form#player2").show();
  });

  $("form#player2").submit(function() {
    event.preventDefault();
    $("div.player2").hide();
    $("p#player2").append("Player 2 is Ready!");
    $("button#start").show();
  });

  $("button#start").click(function(event) {
    $("div.playernames").hide();
    $("div#start").hide();
    $("div.game-mode").show();



    var player1input = $("input#player1").val();
    var player2input = $("input#player2").val();

    player1 = new Player(player1input);
    player2 = new Player(player2input);

$("h3.player1").text(player1.name);
$("h3.player2").text(player2.name);
  });

  $("button#roll1").click(function(event) {
    player1.rollNumber = diceRoll();
    $("span#rollnumber").text(player1.rollNumber);
    player1.rolling1();
    $("span#turnpoints-1").text(player1.turnScore);
  });

  $("button#hold1").click(function(event) {
    player1.hold();
    $("span#totalpoints-1").text(player1.totalScore);
    $("span#rollnumber").empty();
    $("span#turnpoints-1").empty();
    $(this).prop('disabled', true);
    $("button#roll1").prop('disabled', true);
    $("button#roll2").prop('disabled', false);
    $("button#hold2").prop('disabled', false);
    player1.win();
  });

  $("button#roll2").click(function(event) {
    player2.rollNumber = diceRoll();
    $("span#rollnumber").text(player2.rollNumber);
    player2.rolling1();
    $("span#turnpoints-2").text(player2.turnScore);
  });

  $("button#hold2").click(function(event) {
    player2.hold();
    $("span#totalpoints-2").text(player2.totalScore);
    $("span#rollnumber").empty();
    $("span#turnpoints-2").empty();
    $(this).prop("disabled", true);
    $("button#roll2").prop("disabled", true);
    $("button#roll1").prop("disabled", false);
    $("button#hold1").prop("disabled", false);
    player2.win();
  });
});
