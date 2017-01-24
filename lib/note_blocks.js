class Note1 {
  constructor(canvas, ctx, x, y, my) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.my = my;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 45, 30);
    this.ctx.fillStyle = "#00BFA5";
    this.ctx.fill();
    this.ctx.closePath();
  }
}


module.exports = {
  Note1
};
