"use strict"

const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
let scoreGame = document.querySelector(".score");
let playpause = document.querySelector("#play-pause");
let game = document.querySelector("#game");
let NumberTrials = document.querySelector("#Trials");
let nbreessai = 4;
let score = 0;
scoreGame.textContent = 0;
let timer;

// durée alétoire
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//hole aléatoire
function randomHole(holes) {
  const indexHole = Math.floor(Math.random() * holes.length);
  const hole = holes[indexHole];

  return hole;

  console.log(hole);
}

function translateMole() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
  }, time);
}

function start() {
  NumberTrials.textContent = nbreessai;
  if (timer == null) {
    timer = setInterval(function () {
      translateMole();
    }, 1000);
    playpause.textContent = "Stop";
  } else {
    window.clearInterval(timer);
    timer = null;
    playpause.textContent = "Start!";
  }
}

playpause.addEventListener("click", start);

game.addEventListener("click", function (event) {
  console.log(event.target);

  if (event.target.className == "mole") {
    console.log("succes");
    score++;
    scoreGame.textContent = score;
  } else {
    if (nbreessai == 0) {
      clearInterval(timer);
      playpause.innerHTML = "game Over";
      playpause.removeEventListener("click", start);
    } else {
      NumberTrials.textContent = --nbreessai;
    }
  }
});

