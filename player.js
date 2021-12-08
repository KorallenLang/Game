// let paddleX = (canvas.width-paddleWidth) / 2;
export default class Paddle {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.canvas = canvasVar;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        // paddleX,Y giving incorrect value compared to actual logged value
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.paddleY = this.ctx.canvas.height;
        this.paddleYLimit = 10;
        this.paddleIsGoingDown = false;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect((this.canvas.width - this.paddleWidth) / 2, this.ctx.canvas.height, this.paddleWidth, -this.paddleHeight);
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

    // paddleMoveUp(n) {
    //     let tempJump = this.paddleY;
    //     if (this.paddleY < 0) {
    //         this.paddleY = 0;
    //     }
    //     while(this.paddleY - tempJump < this.paddleYLimit) {
    //         this.paddleY += n;
    //     }
    //     while(this.paddleY < this.paddleYLimit ) {
    //         this.paddleY += n;
    //     }
    // }
}