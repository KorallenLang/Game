import Paddle from "./player.js";

// Canvas variables
let canvas = document.createElement("CANVAS");
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
const Paddle1 = new Paddle(ctx, canvas);  // fixed the problem by adjusting where I initialized height and width
console.log(Paddle1);

// // Ball variables
// let x = canvas.width/2;
// let y = canvas.height-30;
// let dx = -2;
// let dy = -2;
// let ballRadius = 10;
function draw() {
    let cW = canvas.width;
    // let cH = canvas.height;
    canvas.width  = window.innerWidth;
    // canvas.height = window.innerHeight;
    if (cW != canvas.width) {  // window has been resized
        let tempXOffset = (canvas.width - cW) / 2;
        Paddle1.paddleX += tempXOffset;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

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