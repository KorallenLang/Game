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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

setInterval(draw, 10);