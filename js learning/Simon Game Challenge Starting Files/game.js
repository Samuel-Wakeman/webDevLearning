//create arrays
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];
var started=false;
var level=0;
var currentspot=0;
//add event handler to button to create user pattern
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

//animate and play sound
  playSound($(this).attr("id"));
  animatePress(userChosenColour);
//check the answer

  if(checkanswer()){
    currentspot+=1;
  }
  else{
    gameOver();
  }

  if(started===true && currentspot===level){
  setTimeout(nextSequence, 1000);
  userClickedPattern=[];
  currentspot=0;
}
});

//generate computer gamePattern
function nextSequence() {
  level+=1;
  $("h1").html("level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

//play sound animation
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//animate buttons
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function () {
  $("#"+currentColour).removeClass("pressed");
},150);
}

//add listener to start game
$("body").keydown(function(){
if (started===false){
  started=true;
  nextSequence();
  $("h1").html("level "+level);
}});

//check user answer agaist comptuer
function checkanswer(){
  if (userClickedPattern[currentspot]===gamePattern[currentspot])
  {
    return true;
  }
  else{
    return false;
  }
}

//called when the user gueses wrong
function gameOver(){
  startOver();
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  },200);
  $("h1").html("game over, press any key to restart");
}

function startOver(){
  level=0;
  userClickedPattern=[];
  currentspot=0;
  gamePattern = [];
  started=false;
}
