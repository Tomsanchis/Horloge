let divs = document.querySelectorAll(".huit");

const hourtop = document.querySelector(".hourtop");
const hourtop2 = document.querySelector(".hourtop2");

const hourbottom = document.querySelector(".hourbottom");
const hourbottom2 = document.querySelector(".hourbottom2");

const minutebottom = document.querySelector(".minutebottom");
const minutebottom2 = document.querySelector(".minutebottom2");

const minutetop = document.querySelector(".minutetop");
const minutetop2 = document.querySelector(".minutetop2");

let minutes = 23;
let secondes = 60;

function sr() {
  if (secondes > 0) {
    secondes--;
  } else if (secondes === 0) {
    minutes--;
    secondes = 60;
  }
  let timer = "";
  if (minutes < 10) {
    timer += "0" + minutes;
  } else {
    timer += minutes;
  }
  if (secondes < 10) {
    timer += "0" + secondes;
  } else {
    timer += secondes;
  }
  if (
    timer[0] === "0" &&
    timer[1] === "0" &&
    timer[2] === "0" &&
    timer[3] === "0"
  ) {
    console.log("clear");
    clearInterval(srinterval);
  }
  for (let i = 0; i < timer.length; i++) {
    if (timer[i] === "0") {
      console.log("0");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");

      divs[i].lastElementChild.classList.remove("haut");
      divs[i].lastElementChild.classList.add("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "1") {
      console.log("1");
      divs[i].firstElementChild.classList.remove("gauche");
      divs[i].firstElementChild.classList.remove("haut");
      divs[i].firstElementChild.classList.add("droite");

      divs[i].lastElementChild.classList.remove("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.remove("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "2") {
      console.log("2");
      divs[i].firstElementChild.classList.remove("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.add("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.remove("droite");
    }
    if (timer[i] === "3") {
      console.log("3");
      divs[i].firstElementChild.classList.remove("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");
      divs[i].lastElementChild.classList.add("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "4") {
      console.log("4");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.remove("haut");
      divs[i].firstElementChild.classList.add("droite");
      divs[i].lastElementChild.classList.add("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.remove("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "5") {
      console.log("5");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.remove("droite");
      divs[i].lastElementChild.classList.add("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "6") {
      console.log("6");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.remove("droite");
      divs[i].lastElementChild.classList.remove("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.add("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "7") {
      console.log("7");
      divs[i].firstElementChild.classList.remove("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");
      divs[i].lastElementChild.classList.remove("bas");

      divs[i].lastElementChild.classList.remove("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.remove("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "8") {
      console.log("8");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");
      divs[i].lastElementChild.classList.add("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.add("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "9") {
      console.log("9");
      divs[i].firstElementChild.classList.add("gauche");
      divs[i].firstElementChild.classList.add("haut");
      divs[i].firstElementChild.classList.add("droite");
      divs[i].lastElementChild.classList.add("bas");

      divs[i].lastElementChild.classList.add("haut");
      divs[i].lastElementChild.classList.remove("gauche");
      divs[i].lastElementChild.classList.add("bas");
      divs[i].lastElementChild.classList.add("droite");
    }
  }
}

const srinterval = setInterval(sr, 1000);
