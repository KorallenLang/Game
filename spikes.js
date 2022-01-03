export default class Spikes {
    constructor(canvasContext, canvasVar) {
        this.ctx = canvasContext;
        this.canvas = canvasVar;
    }

    drawSpike(baseY, topY, startX) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, baseY);
        let topX = startX + 15;
        this.ctx.lineTo(topX, topY);
        this.ctx.stroke();
        topX += 15;
        this.ctx.lineTo(topX, baseY);
        this.ctx.stroke();
        this.ctx.lineTo(startX, baseY);
        this.ctx.fillStyle = 'grey';
        this.ctx.fill();
    }

    validSpawn(startX) {
        if (Math.abs(startX - this.canvas.width) < 75 || startX - 0 < 75) {
            return false;
        }
    }
}