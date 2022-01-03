import Paddle from "./player.js";
import Floor from "./floor.js";
import Spikes from "./spikes.js";

// Canvas variables
let canvas = document.createElement("CANVAS");
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
// check for old game in storage
const Paddle1 = new Paddle(ctx, canvas, 325, 586);  // fixed the problem by adjusting where I initialized height and width
console.log(Paddle1);
const Floor1 = new Floor(ctx, canvas);
const spikesArr = [];
let spikeTempX = Math.random() * 586
console.log(Floor1);
let levelFinished = false;

function createBackground(n, f) {
    for(let i = 0; i < n; i++) {
        spikesArr[n] = new Spikes(ctx, canvas);
        spikesArr[n].drawSpike(586, 536, f);
    }
}

function createNewLevel() {
    spikeTempX = Math.random() * 586;
    createBackground(1, spikeTempX);
}

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Floor1.drawFloor();
    if (!levelFinished) {
        createBackground(1, spikeTempX);
    }
    else {
        createNewLevel();
        levelFinished = false;
    }
    Paddle1.drawPaddle();
    if (canvas.width - Paddle1.paddleX == 75) {  // level finished turns true
        levelFinished = true;
        Paddle1.paddleX = 0;
    }
}

console.log(spikesArr);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Event Handlers
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        Paddle1.paddleMoveRight();
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        Paddle1.paddleMoveLeft();
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        Paddle1.paddleCallMoveUp();
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        Paddle1.rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        Paddle1.leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        Paddle1.upPressed = false;
    }
}

setInterval(draw, 10);