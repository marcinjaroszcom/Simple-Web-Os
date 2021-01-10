const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Game size
let pixel;
if(window.innerWidth > 767){
    pixel = 24;
}else if(window.innerWidth > 321){
    pixel = 15;
}else{
    pixel = 12;
};

canvas.width = pixel * 25;
canvas.height = pixel * 25;

let points = 0;

//1. Draw fruit
let fruitPosX = getRandomInt(0, pixel) * pixel;
let fruitPosY = getRandomInt(0, pixel) * pixel;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function fruit() {
    ctx.fillStyle = 'red';
    ctx.fillRect(fruitPosX, fruitPosY, pixel, pixel);
};

//2. Draw snake
let snakePosX = pixel * 12;
let snakePosY = pixel * 12;

let snakeX = pixel;
let snakeY = pixel;

let xVel = 0;
let yVel = 0;

let snakeTail = [];

function snake() {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'black';
    for (let i = 0; i < snakeTail.length; i++) {
        ctx.fillRect(snakeTail[i].x, snakeTail[i].y, snakeX, snakeY);
        ctx.strokeRect(snakeTail[i].x, snakeTail[i].y, snakeX + 1, snakeY + 1);
    };
    ctx.fillStyle = 'yellow';
    ctx.fillRect(snakePosX, snakePosY, snakeX, snakeY);
    ctx.strokeRect(snakePosX, snakePosY, snakeX + 1, snakeY + 1);
};

//3. Control
document.addEventListener('keydown', move);

const buttons = document.querySelectorAll('button');
buttons.forEach(e => {
    e.addEventListener('click', () => move(e));
});

function move(e) {
    if (e.keyCode == 37 || e.value == 'left') {
        if (xVel == pixel)
            return;
        xVel = -pixel;
        yVel = 0;
    }
    if (e.keyCode == 38 || e.value == 'up') {
        if (yVel == pixel)
            return;
        yVel = -pixel;
        xVel = 0;
    }
    if (e.keyCode == 39 || e.value == 'right') {
        if (xVel == -pixel)
            return;
        xVel = pixel;
        yVel = 0;
    }
    if (e.keyCode == 40 || e.value == 'down') {
        if (yVel == -pixel)
            return;
        yVel = pixel;
        xVel = 0;
    }
};

//4. Update
function update() {
    for (let i = 0; i < snakeTail.length - 1; i++) {
        snakeTail[i] = snakeTail[i + 1];
    };
    snakeTail[points - 1] = { x: snakePosX, y: snakePosY };

    snakePosX = snakePosX + xVel;
    snakePosY = snakePosY + yVel;

    // Snake collision with canvas
    // Y
    if (snakePosY < 0) {
        snakePosY = canvas.height;
    } else if (snakePosY > canvas.height - snakeY) {
        snakePosY = 0;
    }
    // X
    if (snakePosX < 0) {
        snakePosX = canvas.width;
    } else if (snakePosX > canvas.width - snakeX) {
        snakePosX = 0;
    }

    // Snake collision with tail
    for (let i = 0; i < snakeTail.length; i++) {
        if (snakeTail[i].x === snakePosX && snakeTail[i].y === snakePosY) {
            clearInterval(interval);
            gameOver();
        };
    };
};

//5. Counting points
function drawScore() {
    ctx.fillStyle = "green";
    ctx.font = "15px Verdana";
    ctx.fillText("points: " + points, canvas.width - 75, 15);
};

//6. Game Over
function gameOver() {
    const gmOv = document.querySelector('.gameOver');
    gmOv.classList.add('gameOverAct');

    const score = document.querySelector('.score');
    score.textContent = "Your score: " + points;

    const rplBtn = document.querySelector('.replayBtn');
    rplBtn.addEventListener('click', () => {
        window.location.reload(true);
    });
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 32) {
            window.location.reload(true);
        };
    });
};

//7. Game
function game() {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    fruit();
    snake();
    update();

    // if ate
    if (snakePosX == fruitPosX && snakePosY == fruitPosY) {
        fruitPosX = getRandomInt(0, pixel) * pixel;
        fruitPosY = getRandomInt(0, pixel) * pixel;
        points++;
    };

    drawScore();
};

//Set Interval
let interval = setInterval(game, 1000 / 8);