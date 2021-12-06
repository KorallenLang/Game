// let paddleX = (canvas.width-paddleWidth) / 2;
export default class Paddle {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.canvas = canvasVar;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
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
}