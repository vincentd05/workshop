let propulsion = document.querySelector(".surprise")
let countdown = document.querySelector(".countdown")
let rocket = document.querySelector("#rocket")
let number = 0
var elmt = document.querySelector("body")
let conf = document.querySelector(".lol")
let audio = new Audio('./images/clap.mp3');


propulsion.addEventListener(
  'click',
  function() {
  setInterval(decollage, 31.25);
}, false);
function decollage() {
    if(number < 100 ){
      countdown.innerHTML = (number +=1)
    } else {
      propulsion.style.transform ="rotate(360deg)";
      propulsion.style.transition = "1s"
      elmt.style.backgroundColor = "#000";
      conf.style.transform = "translateY(0)"
      conf.style.transition = "1s"
      audio.play();
        }
        }
