const Lines = require('./lines');
const NoteBlocks = require('./note_blocks');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.note1x = 0;
    this.note1y = 0;
    this.note1my = 5;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();

    if (this.note1y > this.canvas.height - 45) {
      this.note1y = 0;
    }

    this.note1y += this.note1my;

    const note1 = new NoteBlocks.Note1(this.canvas, this.ctx,
                                       this.note1x, this.note1y, this.note1my);
    note1.drawNote();

    requestAnimationFrame(this.draw.bind(this));
  }
}

module.exports = Game;
