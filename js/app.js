let minutes = 24;
let secondes = 60;


const hourtop = document.querySelector('.hourtop');
const hourtop2 = document.querySelector('.hourtop2');

const hourbottom = document.querySelector('.hourbottom');
const hourbottom2 = document.querySelector('.hourbottom2');


const minutebottom = document.querySelector('.minutebottom');
const minutebottom2 = document.querySelector('.minutebottom2');

const minutetop = document.querySelector('.minutetop');
const minutetop2 = document.querySelector('.minutetop2');


function timer () {
    if (secondes > 0) {
    secondes--;
    }
    else if (secondes === 0) {
        minutes--;
        secondes = 60;
    }

    console.log(minutes + " : " + secondes)
}

setInterval(timer, 1000);
