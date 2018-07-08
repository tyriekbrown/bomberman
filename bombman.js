//globally scope variable
var moveMentUp = 10;
var moveMentDown = 10;

document.getElementById('buttonUp').onclick=goUp
document.getElementById('buttonDown').onclick=goDown
document.getElementById('buttonLeft').onclick=goLeft
document.getElementById('buttonRight').onclick=goRight

//functions
function goUp(){
  moveMentUp -=20;
  document.getElementsByTagName("img")[0].style.marginTop = moveMentUp + "px"

}
function goDown(){
  moveMentUp +=20;
  document.getElementsByTagName("img")[0].style.marginTop = moveMentUp + "px"

}
function goLeft(){
  moveMentDown -=20;
  document.getElementsByTagName("img")[0].style.marginLeft = moveMentDown + "px"

}
function goRight(){
  moveMentDown +=20;
  document.getElementsByTagName("img")[0].style.marginLeft = moveMentDown + "px"

}
