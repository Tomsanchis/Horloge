let minutes = 1;
let secondes = 1;

const hourtop = document.querySelector(".hourtop");
const hourtop2 = document.querySelector(".hourtop2");

const hourbottom = document.querySelector(".hourbottom");
const hourbottom2 = document.querySelector(".hourbottom2");

const minutebottom = document.querySelector(".minutebottom");
const minutebottom2 = document.querySelector(".minutebottom2");

const minutetop = document.querySelector(".minutetop");
const minutetop2 = document.querySelector(".minutetop2");

function timer() {
  let s = minutes + " : " + secondes;
  if (secondes > 0) {
    secondes--;
  } else if (secondes === 0) {
    minutes--;
    secondes = 1;
  }
  if (s[0] === "0" && s[4] === "0") {
    clearInterval(timerinterval);
  }
  console.log(s);
}

const timerinterval = setInterval(timer, 1000);
