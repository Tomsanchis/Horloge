let minutes = 24;
let secondes = 60;


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
