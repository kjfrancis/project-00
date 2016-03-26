$(document).on('ready', function() {

console.log('JS is WORKING');

var playerOne = "P1";
var playerTwo = "P2";

var resetGame = function () {
  $boxes.text("");
  $boxes.removeClass("X");
  $boxes.removeClass("O");
};

/*$(window).keydown(function (event){

    //move player one to the right

});*/

$(document).keydown(function (e){

alert(e.keyCode);
    //move player two to the right

});

$ ('#reset').on('click', function () {
  console.log("Button got clicked");
  resetGame();
});
/*$boxes.on('click', function() {
  if ($(this).text() === "") {
    $(this).text (turn);
      changeTurn();
    $(this).addClass(turn);
    moves += 1;
  }
*/

});
