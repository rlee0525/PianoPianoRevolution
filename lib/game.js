const Lines = require('./lines');
const Blocks = require('./blocks');
const EasySong = require('./easy_song');

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

    const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();

    const hitbox = this.canvas.height - 45;

    this.easySong.map(note => {
      note.drawNote();
      this.drawScore(this.ctx);
      note.y += 3;

      if ((note.x === 3 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedQ === true) ||
          (note.x === 44 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed2 === true) ||
          (note.x === 85 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedW === true) ||
          (note.x === 126 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed3 === true) ||
          (note.x === 167 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedE === true) ||
          (note.x === 211 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedR === true) ||
          (note.x === 251 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed5 === true) ||
          (note.x === 291 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedT === true) ||
          (note.x === 331 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed6 === true) ||
          (note.x === 371 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedY === true) ||
          (note.x === 411 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed7 === true) ||
          (note.x === 451 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedU === true) ||
          (note.x === 493 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedI === true) ||
          (note.x === 534 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed9 === true) ||
          (note.x === 575 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedO === true) ||
          (note.x === 616 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed0 === true) ||
          (note.x === 657 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedP === true))
          {
            this.score += 1;
          } else if ((note.x === 3 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed2 === false) ||
          (note.x === 44 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed2 === false) ||
          (note.x === 85 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedW === false) ||
          (note.x === 126 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed3 === false) ||
          (note.x === 167 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedE === false) ||
          (note.x === 211 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedR === false) ||
          (note.x === 251 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed5 === false) ||
          (note.x === 291 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedT === false) ||
          (note.x === 331 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed6 === false) ||
          (note.x === 371 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedY === false) ||
          (note.x === 411 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed7 === false) ||
          (note.x === 451 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedU === false) ||
          (note.x === 493 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedI === false) ||
          (note.x === 534 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed9 === false) ||
          (note.x === 575 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedO === false) ||
          (note.x === 616 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressed0 === false) ||
          (note.x === 657 && note.y < hitbox + 3 && note.y > hitbox - 3 && this.pressedP === false))
          {
            this.strike += 1;
          }

    });

    if (this.strike > 5) {
      this.gameover = true;
      window.moonlight.pause();
      window.cancelAnimationFrame();
    }

    requestAnimationFrame(this.draw.bind(this));

  }

  drawScore(ctx) {
    ctx.font = "28px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText("Score:  " + this.score, 230, 675);
  }
}

module.exports = Game;
