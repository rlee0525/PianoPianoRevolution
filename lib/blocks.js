class Block {
  constructor(canvas, ctx, x, y, my, color) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.my = my;
    this.color = color;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

module.exports = {
  Block
};
