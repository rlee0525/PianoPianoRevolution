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
    this.ctx.moveTo(50, this.canvas.height - 300);
    this.ctx.lineTo(750, this.canvas.height - 300);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(50, this.canvas.height - 300);
    this.ctx.lineTo(50, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(94, this.canvas.height - 300);
    this.ctx.lineTo(94, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(135, this.canvas.height - 300);
    this.ctx.lineTo(135, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(176, this.canvas.height - 300);
    this.ctx.lineTo(176, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(217, this.canvas.height - 300);
    this.ctx.lineTo(217, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(260, this.canvas.height - 300);
    this.ctx.lineTo(260, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(301, this.canvas.height - 300);
    this.ctx.lineTo(301, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(341, this.canvas.height - 300);
    this.ctx.lineTo(341, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(381, this.canvas.height - 300);
    this.ctx.lineTo(381, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(421, this.canvas.height - 300);
    this.ctx.lineTo(421, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(461, this.canvas.height - 300);
    this.ctx.lineTo(461, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(501, this.canvas.height - 300);
    this.ctx.lineTo(501, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(540, this.canvas.height - 300);
    this.ctx.lineTo(540, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(584, this.canvas.height - 300);
    this.ctx.lineTo(584, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(625, this.canvas.height - 300);
    this.ctx.lineTo(625, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(666, this.canvas.height - 300);
    this.ctx.lineTo(666, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(707, this.canvas.height - 300);
    this.ctx.lineTo(707, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(750, this.canvas.height - 300);
    this.ctx.lineTo(750, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();
  }
}

module.exports = Lines;
