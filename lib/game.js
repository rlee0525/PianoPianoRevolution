const Lines = require('./lines');
const Blocks = require('./blocks');
const EasySong = require('./easy_song');
const Piano = require('./piano');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.strike = 0;
    this.gameover = false;
    this.score = 0;

    this.easySong = new EasySong(this.canvas, this.ctx).notes();

    this.pressedQ = false;
    this.pressed2 = false;
    this.pressedW = false;
    this.pressed3 = false;
    this.pressedE = false;
    this.pressedR = false;
    this.pressed5 = false;
    this.pressedT = false;
    this.pressed6 = false;
    this.pressedY = false;
    this.pressed7 = false;
    this.pressedU = false;
    this.pressedI = false;
    this.pressed9 = false;
    this.pressedO = false;
    this.pressed0 = false;
    this.pressedP = false;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const piano = new Piano(this.canvas, this.ctx);
    // debugger;
    piano.draw();

    const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();

    const hitbox = this.canvas.height - 300;

    this.easySong.map(note => {
      note.drawNote();
      this.drawScore(this.ctx);
      note.y += 2;

      if (note.y > hitbox) {
        note.y = 3000;
      }

      if ((note.x === 53 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedQ === true) ||
          (note.x === 94 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed2 === true) ||
          (note.x === 135 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedW === true) ||
          (note.x === 176 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed3 === true) ||
          (note.x === 217 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedE === true) ||
          (note.x === 261 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedR === true) ||
          (note.x === 301 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed5 === true) ||
          (note.x === 341 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedT === true) ||
          (note.x === 381 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed6 === true) ||
          (note.x === 421 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedY === true) ||
          (note.x === 461 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed7 === true) ||
          (note.x === 501 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedU === true) ||
          (note.x === 543 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedI === true) ||
          (note.x === 584 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed9 === true) ||
          (note.x === 625 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedO === true) ||
          (note.x === 666 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed0 === true) ||
          (note.x === 707 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedP === true))
          {
            this.score += 1;
          } else if ((note.x === 53 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedQ === false) ||
          (note.x === 94 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed2 === false) ||
          (note.x === 135 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedW === false) ||
          (note.x === 176 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed3 === false) ||
          (note.x === 217 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedE === false) ||
          (note.x === 261 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedR === false) ||
          (note.x === 301 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed5 === false) ||
          (note.x === 341 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedT === false) ||
          (note.x === 381 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed6 === false) ||
          (note.x === 421 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedY === false) ||
          (note.x === 461 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed7 === false) ||
          (note.x === 501 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedU === false) ||
          (note.x === 543 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedI === false) ||
          (note.x === 584 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed9 === false) ||
          (note.x === 625 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedO === false) ||
          (note.x === 666 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed0 === false) ||
          (note.x === 707 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedP === false))
          {
            this.strike += 1;
          }

    });

    if (this.strike > 30) {
      this.gameover = true;
      window.moonlight.pause();
      window.cancelAnimationFrame();
    }

    // requestAnimationFrame(this.draw.bind(this));
  }

  drawScore(ctx) {
    ctx.font = "45px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText("Score:  " + this.score, 870, 105);
  }
}

module.exports = Game;
