const Lines = require('./lines');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.mx = 0;
    this.my = 2;
  }

  update() {

  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();

    if (this.y > this.canvas.height - 45) {
      this.y = 0;
    }

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 45, 30);
    this.ctx.fillStyle = "#00BFA5";
    this.ctx.fill();
    this.ctx.closePath();

    this.x += this.mx;
    this.y += this.my;
  }
}

module.exports = Game;
