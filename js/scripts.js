//backend logic

//player constructor
var Player = function(name) {
  this.name = name,
  this.points = []
}
var diceRoll = function() {
  var random = Math.floor(Math.random()*6 + 1);
}


















//frontend logic
$(document).ready(function() {
$("form#player1").submit(function() {
  event.preventDefault();
  var player1input= $("input#player1").val();
  var player1 = new Player(player1input);
  $("div.player1").empty();
$("p#player1").append(player1.name + " is Ready!");
});


$("form#player2").submit(function() {
  event.preventDefault();
  var player2input= $("input#player2").val();
  var player2 = new Player(player2input);
  $("div.player2").empty();
$("p#player2").append(player2.name + " is Ready!");
});





  $("span.roll").click(function() {
    $("#turn-points").text(random).val();
  });
});
