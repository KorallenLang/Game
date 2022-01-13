export default class Spikes {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.canvas = canvasVar;
        this.endX = Math.floor(Math.random() * 100) + 80;
        this.baseY = 586;
        this.topY = 536;
    }

    drawSpike() {
        this.ctx.beginPath();
        let startX = this.endX - 30;
        this.ctx.moveTo(startX, this.baseY);
        let topX = startX + 15;
        this.ctx.lineTo(topX, this.topY);
        this.ctx.stroke();
        this.ctx.lineTo(this.endX, this.baseY);
        this.ctx.stroke();
        this.ctx.lineTo(startX, this.baseY);
        this.ctx.fillStyle = 'grey';
        this.ctx.fill();
    }
}