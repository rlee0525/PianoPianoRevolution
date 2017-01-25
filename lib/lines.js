class Lines {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = "#00BFA5";
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(50, this.canvas.height - 270);
    this.ctx.lineTo(750, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(260, 0);
    this.ctx.lineTo(260, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(540, 0);
    this.ctx.lineTo(540, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();
  }
}

module.exports = Lines;
