randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;

var imgpath1= "images/dice"+randomNumber1+".png";
var imgpath2= "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imgpath1);
document.querySelector(".img2").setAttribute("src",imgpath2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player one wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="player two wins";
}
else{
  document.querySelector("h1").innerHTML="draw!";
}
