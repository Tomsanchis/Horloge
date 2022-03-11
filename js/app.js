const hourtop = document.querySelector('.hourtop');
const hourbottom = document.querySelector('.hourbottom');

const minutetop = document.querySelector('.minutetop');
const minutebottom = document.querySelector('.minutebottom');


let count = Date.now();

setInterval(function () {
    let instant = Date.now();
    let reverse = instant - count;
    const hours = Math.floor((reverse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((reverse % (1000 * 60 * 60)) / (1000 * 60));
    console.log(hours + "h " + minutes + "m ")
    if (minutes == 1) {
       minutetop.style.borderLeft = "none"
       minutetop.style.borderTop = "none"
       minutetop.style.borderBottom = "none"
       minutebottom.style.borderLeft = "none"
       minutebottom.style.borderTop = "none"
       minutebottom.style.borderBottom = "none"
    } else {
        minutetop.style.border = "solid 5px rgb(174, 0, 255)"
        minutetop.style.border = "solid 5px rgb(174, 0, 255)"
        minutetop.style.border = "solid 5px rgb(174, 0, 255)"
        minutebottom.style.border = "solid 5px rgb(174, 0, 255)"
        minutebottom.style.border = "solid 5px rgb(174, 0, 255)"
        minutebottom.style.border = "solid 5px rgb(174, 0, 255)"
    }
}, 1000)
