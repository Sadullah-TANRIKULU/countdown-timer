const startBtn = document.querySelector('.start-btn');

const audio = document.querySelector('audio');

const pauseBtn = document.querySelector('.pause-btn');

const resetBtn = document.querySelector('.reset-btn');

let startingMinutes = document.querySelector('#countdown-input');

const countdownEl = document.getElementById('countdown');

let time = 0;

let startCountdown;

let minutes = 0;

let seconds = 0;

let pause = false;
seconds = seconds < 10 ? '0' + seconds : seconds;
countdownEl.innerHTML = `${minutes} : ${seconds}`;

function updateCountdown() {
    console.log(time);

    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;

    if (!time) {
        clearInterval(startCountdown);
        time = startingMinutes * 60;
        minutes = 0;
        seconds = 0;
        countdownEl.innerHTML = `${minutes} : ${seconds}`;
        audio.play();

    }
}


startBtn.addEventListener('click', () => {
    
        if (!pause) {

            time = startingMinutes.value * 60;
        } else {
            pause = false;
        }

    startCountdown = setInterval(updateCountdown, 1000);

    countdownEl.innerHTML = `${minutes} : ${seconds}`;

});


pauseBtn.addEventListener('click', () => {

    pause = true;

    clearInterval(startCountdown);
});


resetBtn.addEventListener('click', () => {

    clearInterval(startCountdown);
    time = startingMinutes.value * 60;

    minutes = 0;
    seconds = 0;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    pause = false;
})


window.onload = () => {
    document.querySelector('#countdown-input').focus();
}

