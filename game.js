import Paddle from "./player.js";

// Canvas variables
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
const Paddle1 = new Paddle(ctx, canvas);
console.log(Paddle1);

// // Ball variables
// let x = canvas.width/2;
// let y = canvas.height-30;
// let dx = -2;
// let dy = -2;
// let ballRadius = 10;
function draw() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Paddle1.drawPaddle();
    // drawBall();
    // x += dx;
    // y += dy;
    // if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    //     dx = -dx;
    // }
    // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    //     dy = -dy;
    // }
    
}

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
    // else if(e.key == "Up" || e.key == "ArrowUp") {
    //     Paddle1.paddleMoveUp(-5, true);
    // }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        Paddle1.rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        Paddle1.leftPressed = false;
    }
    // else if(e.key == "Up" || e.key == "ArrowUp") {
    //     Paddle1.upPressed = false;
    // }
}

setInterval(draw, 10);