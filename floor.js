export default class Floor {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.canvas = canvasVar;
        this.floorHeight = 15;
        this.floorWidth = this.canvas.width;
        this.maxY = this.canvas.height;
        this.minY = this.maxY - this.floorHeight;  // top of floor rectangle
    }

    drawFloor() {
        this.ctx.beginPath();
        this.ctx.rect(0, this.maxY, this.floorWidth, -this.floorHeight);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
}