var terminal=document.querySelectorAll(".drum").length;
var current;

var audio = new Audio("sounds/tom-1.mp3");
for ( var i=0;i<terminal;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click", onclick);
}

function onclick(){
assignSound(this.innerHTML);
buttonAnimation(this.innerHTML);

}
///detecting keyboard pressed
document.addEventListener("keydown",function(event){
  assignSound(event.key);
  buttonAnimation(event.key);
});

function assignSound(current){

  switch (current) {

    case "w":
      audio= new Audio("sounds/tom-1.mp3");

      break;

      case"a":
      audio= new Audio("sounds/tom-2.mp3");

      break;

      case"s":
      audio= new Audio("sounds/tom-3.mp3");

      break;

      case"d":
      audio= new Audio("sounds/tom-4.mp3");

      break;


      case"j":
      audio= new Audio("sounds/snare.mp3");

      break;

      case"l":
      audio= new Audio("sounds/kick-bass.mp3");

      break;
      case"k":
      audio= new Audio("sounds/crash.mp3");

      break;


    default:
    console.log(current);
  }
  audio.play();
}

function buttonAnimation(current){

document.querySelector("."+current).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+current).classList.remove("pressed");
  }, 100)

}
