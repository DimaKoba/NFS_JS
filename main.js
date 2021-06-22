const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car = document.createElement('div');
      car.classList.add('car');

start.addEventListener('click', startGame);


document.addEventListener('keydown', startRun);
document.addEventListener('keyUp', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

const settings = {
    start: false,
    score: 0,
    speed: 3
}

function startGame () {
    start.classList.add('hiden');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame)
}

function playGame() {
    requestAnimationFrame(playGame);
    if(settings.start){
        requestAnimationFrame(playGame)
    }
}

function startRun (e) {
e.preventDefault();
keys[e.key] = true;
}

function stopRun (e) {
    e.preventDefault();
    keys[e.key] = false;
}