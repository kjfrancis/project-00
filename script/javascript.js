// A --> 65
// Right-Arrow --> 39
$(document).on('ready', function() {

console.log('JS is WORKING');

var playerOne = "P1";
var playerTwo = "P2";
var letterA = 97;
var letterL = 108;
var resetGame = function() {
  letterA.removeId("p-1");
  rightArrow.removeId("p-2");
};

/*$(window).keydown(function (event){

    //move player one to the right

});*/

$(window).on("keypress", function handleEvent(e){
    console.log('is playerOne working', e);
    if (e.keyCode === letterA){
      $('#p-1').animate({
                'left': '+=10px'
      },0 );
      if($('#p-1').css('left') === '830px'){
        alert("Batman Wins!!");
      }
    } else {
      console.log("if you're reading this, the first IF was failed!");
    }
  });

$(window).on("keypress" ,function handleEvent(e){
    console.log('is playerTwo working');
      if (e.which === letterL){
      $('#p-2').animate({
                'left': '+=10px'
      } ,0 );
      if($('#p-2').css('left') === '830px'){
        alert("Superman Wins!!");
      }
    }
  });
$ ('#reset').on('click', function () {
  console.log("Button got clicked");
  resetGame();
});
});
