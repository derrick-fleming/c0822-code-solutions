let countdown = 3;

function blastOff() {

  if (countdown < 1) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    console.log(countdown);
    countdown--;
  }

}

const interval = setInterval(blastOff, 1000);
