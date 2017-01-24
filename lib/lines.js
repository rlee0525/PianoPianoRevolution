class Lines {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = "#00BFA5";
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvas.height - 20);
    this.ctx.lineTo(this.canvas.width, this.canvas.height - 20);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(210, 0);
    this.ctx.lineTo(210, this.canvas.height - 20);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(490, 0);
    this.ctx.lineTo(490, this.canvas.height - 20);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();
  }
}

module.exports = Lines;
