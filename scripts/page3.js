let knuck = document.querySelector(".knuck1")
let idfsg = document.querySelector(".idfsg")
let hello = document.querySelector(".hellobro")
let hellob = document.querySelector(".hello")
let dawae = document.querySelector(".dawae")
let audio = new Audio('./images/thewae.m4a');
let idfeel = new Audio('./images/idfeel.mp4');

dawae.style.display="none"
knuck.style.display="block"
hellob.addEventListener(
  'click', function() {
    idfsg.style.display="none"
    hello.style.display="block"
    knuck.style.display="none"
    audio.play();
    dawae.style.display="block"
  })
dawae.addEventListener(
  'click', function() {
    idfsg.style.display="block"
    hello.style.display="none"
    knuck.style.display="none"
    idfeel.play();
  })
