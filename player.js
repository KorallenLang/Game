export default class Paddle {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.canvas = canvasVar;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.paddleY = this.canvas.height;
        this.paddleIsGoingDown = false;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.paddleY, this.paddleWidth, -this.paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    paddleMoveLeft() {
        this.paddleX -= 2;
        if (this.paddleX < 0) {
            this.paddleX = 0;
        }
    }

    paddleMoveRight() {
        this.paddleX += 2;
        if (this.paddleX > this.canvas.width - this.paddleWidth) {
            this.paddleX = this.canvas.width - this.paddleWidth;
        }
    }

    paddleCallMoveUp() {
        let startY = this.paddleY;
        let paddleYLimit = this.paddleY - 10;
        let paddleJump = setInterval(() => {
            this.paddleMoveUp(paddleJump, startY, paddleYLimit);
        }, 100);
    }

    paddleMoveUp(interval, startPoint, paddleYLimitation) {
        if (this.paddleY > paddleYLimitation && !this.paddleIsGoingDown) {
            this.paddleY -= 2;
        } else {
            this.paddleIsGoingDown = true;
            this.paddleY += 2;
            if (this.paddleY === startPoint) {
                clearInterval(interval);
                this.paddleIsGoingDown = false;
            }
        }
    }   
}