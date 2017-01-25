class WhiteKey {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = "#00BFA5";
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class BlackKey {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = "#EEFF41";
    this.ctx.fill();
    this.ctx.closePath();
  }
}

module.exports = {
  WhiteKey,
  BlackKey
};
