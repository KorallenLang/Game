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
let spikesArr = [];
console.log(Floor1);
let numberOfSpikes = Math.floor(Math.random() * 4);
let levelFinished = true;

function createBackground(numOfSpikes) {
    spikesArr = [];  // clear spikesArr
    for(let i = 0; i < numOfSpikes; i++) {
        spikesArr.push(new Spikes(ctx, canvas));
    }
}

function createNewLevel() {
    numberOfSpikes = Math.floor(Math.random() * 4);
    createBackground(numberOfSpikes);
}

function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
}
 
/* A function to check whether point P(x, y) lies inside the triangle formed
by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside(x1, y1, x2, y2, x3, y3, x, y) {
    /* Calculate area of triangle ABC */
    let A = area(x1, y1, x2, y2, x3, y3);
    
    /* Calculate area of triangle PBC */
    let A1 = area(x, y, x2, y2, x3, y3);
    
    /* Calculate area of triangle PAC */
    let A2 = area(x1, y1, x, y, x3, y3);
    
    /* Calculate area of triangle PAB */   
    let A3 = area(x1, y1, x2, y2, x, y);
        
    /* Check if sum of A1, A2 and A3 is same as A */
    console.log(A === A1 + A2 + A3);
    return (A === A1 + A2 + A3);
}

function checkDeath(x1, y1, x2, y2, x3, y3, paddleObj) {
    // console.log(isInside(x1, y1, x2, y2, x3, y3, paddleObj.paddleX, paddleObj.paddleY));
    // console.log("paddleX : " + paddleObj.paddleX + " paddleY : " + paddleObj.paddleY);
    console.log("left corner x : " + x1 + " middle x : " + x2 + " right corner x : " + x3);
    console.log("left corner y : " + y1 + " middle y : " + y2 + " right corner y : " + y3);
    if (isInside(x1, y1, x2, y2, x3, y3, paddleObj.paddleX, paddleObj.paddleY)) {
        console.log("You died");
        paddleObj.paddleX = 0;
        levelFinished = true;
    }
}

function draw() {
    // Setting up canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw floor
    Floor1.drawFloor();

    // Draw paddle
    Paddle1.drawPaddle();

    if (levelFinished) {
        createNewLevel();
        Paddle1.paddleX = 0;
        levelFinished = false;
    }

    const map1 = spikesArr.map(spike => 
        {
            spike.drawSpike();
            checkDeath(spike.endX - 30, spike.baseY, spike.endX - 15, spike.topY, spike.endX, spike.baseY, Paddle1)
        });
    
    if (canvas.width - Paddle1.paddleX === 75) {  // paddle makes it to end, level finished turns true
        levelFinished = true;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Event Handlers
function keyDownHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        Paddle1.paddleMoveRight();
    }
    else if(e.key === "Left" || e.key === "ArrowLeft") {
        Paddle1.paddleMoveLeft();
    }
    else if(e.key === "Up" || e.key === "ArrowUp") {
        if (!Paddle1.crtJump) {
            Paddle1.paddleCallMoveUp();
        }
    }
}

function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        Paddle1.rightPressed = false;
    }
    else if(e.key === "Left" || e.key === "ArrowLeft") {
        Paddle1.leftPressed = false;
    }
    else if(e.key === "Up" || e.key === "ArrowUp") {
        Paddle1.upPressed = false;
    }
}

setInterval(draw, 10);