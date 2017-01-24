const Lines = require('./lines');
const NoteBlocks = require('./note_blocks');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.note1x = 0;
    this.note1y = 0;
    this.note1my = 5;
    this.note2x = 45;
    this.note2y = 0;
    this.note2my = 4;
    this.note3x = 82.5;
    this.note3y = 0;
    this.note3my = 2;
    this.note4x = 127.5;
    this.note4y = 0;
    this.note4my = 3;
    this.note5x = 165;
    this.note5y = 0;
    this.note5my = 9;
    this.note6x = 210;
    this.note6y = 0;
    this.note6my = 7;
    this.note7x = 255;
    this.note7y = 0;
    this.note7my = 6;
    this.note8x = 292.5;
    this.note8y = 0;
    this.note8my = 1;
    this.note9x = 337.5;
    this.note9y = 0;
    this.note9my = 8;
    this.note10x = 375;
    this.note10y = 0;
    this.note10my = 10;
    this.note11x = 415;
    this.note11y = 0;
    this.note11my = 2;
    this.note12x = 452.5;
    this.note12y = 0;
    this.note12my = 4;
    this.note13x = 490;
    this.note13y = 0;
    this.note13my = 5;
    this.note14x = 535;
    this.note14y = 0;
    this.note14my = 7;
    this.note15x = 572.5;
    this.note15y = 0;
    this.note15my = 6;
    this.note16x = 617.5;
    this.note16y = 0;
    this.note16my = 3;
    this.note17x = 655;
    this.note17y = 0;
    this.note17my = 8;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();

    if (this.note1y > this.canvas.height - 45) {
      this.note1y = 0;
    }

    if (this.note2y > this.canvas.height - 45) {
      this.note2y = 0;
    }

    if (this.note3y > this.canvas.height - 45) {
      this.note3y = 0;
    }

    if (this.note4y > this.canvas.height - 45) {
      this.note4y = 0;
    }

    if (this.note5y > this.canvas.height - 45) {
      this.note5y = 0;
    }

    if (this.note6y > this.canvas.height - 45) {
      this.note6y = 0;
    }

    if (this.note7y > this.canvas.height - 45) {
      this.note7y = 0;
    }

    if (this.note8y > this.canvas.height - 45) {
      this.note8y = 0;
    }

    if (this.note9y > this.canvas.height - 45) {
      this.note9y = 0;
    }

    if (this.note10y > this.canvas.height - 45) {
      this.note10y = 0;
    }

    if (this.note11y > this.canvas.height - 45) {
      this.note11y = 0;
    }

    if (this.note12y > this.canvas.height - 45) {
      this.note12y = 0;
    }

    if (this.note13y > this.canvas.height - 45) {
      this.note13y = 0;
    }

    if (this.note14y > this.canvas.height - 45) {
      this.note14y = 0;
    }

    if (this.note15y > this.canvas.height - 45) {
      this.note15y = 0;
    }

    if (this.note16y > this.canvas.height - 45) {
      this.note16y = 0;
    }

    if (this.note17y > this.canvas.height - 45) {
      this.note17y = 0;
    }

    this.note1y += this.note1my;
    this.note2y += this.note2my;
    this.note3y += this.note3my;
    this.note4y += this.note4my;
    this.note5y += this.note5my;
    this.note6y += this.note6my;
    this.note7y += this.note7my;
    this.note8y += this.note8my;
    this.note9y += this.note9my;
    this.note10y += this.note10my;
    this.note11y += this.note11my;
    this.note12y += this.note12my;
    this.note13y += this.note13my;
    this.note14y += this.note14my;
    this.note15y += this.note15my;
    this.note16y += this.note16my;
    this.note17y += this.note17my;

    const note1 = new NoteBlocks.Note1(this.canvas, this.ctx,
                                       this.note1x, this.note1y, this.note1my);
    note1.drawNote();
    const note2 = new NoteBlocks.Note2(this.canvas, this.ctx,
                                       this.note2x, this.note2y, this.note2my);
    note1.drawNote();
    const note3 = new NoteBlocks.Note3(this.canvas, this.ctx,
                                       this.note3x, this.note3y, this.note3my);
    note1.drawNote();
    const note4 = new NoteBlocks.Note4(this.canvas, this.ctx,
                                       this.note4x, this.note4y, this.note4my);
    note1.drawNote();
    const note5 = new NoteBlocks.Note5(this.canvas, this.ctx,
                                       this.note5x, this.note5y, this.note5my);
    note1.drawNote();
    const note6 = new NoteBlocks.Note6(this.canvas, this.ctx,
                                       this.note6x, this.note6y, this.note6my);
    note1.drawNote();
    const note7 = new NoteBlocks.Note7(this.canvas, this.ctx,
                                       this.note7x, this.note7y, this.note7my);
    note1.drawNote();
    const note8 = new NoteBlocks.Note8(this.canvas, this.ctx,
                                       this.note8x, this.note8y, this.note8my);
    note1.drawNote();
    const note9 = new NoteBlocks.Note9(this.canvas, this.ctx,
                                       this.note9x, this.note9y, this.note9my);
    note1.drawNote();
    const note10 = new NoteBlocks.Note10(this.canvas, this.ctx,
                                         this.note10x, this.note10y,
                                         this.note10my);
    note1.drawNote();
    const note11 = new NoteBlocks.Note11(this.canvas, this.ctx,
                                         this.note11x, this.note11y,
                                         this.note11my);
    note1.drawNote();
    const note12 = new NoteBlocks.Note12(this.canvas, this.ctx,
                                         this.note12x, this.note12y,
                                         this.note12my);
    note1.drawNote();
    const note13 = new NoteBlocks.Note13(this.canvas, this.ctx,
                                         this.note13x, this.note13y,
                                         this.note13my);
    note1.drawNote();
    const note14 = new NoteBlocks.Note14(this.canvas, this.ctx,
                                         this.note14x, this.note14y,
                                         this.note14my);
    note1.drawNote();
    const note15 = new NoteBlocks.Note15(this.canvas, this.ctx,
                                         this.note15x, this.note15y,
                                         this.note15my);
    note1.drawNote();
    const note16 = new NoteBlocks.Note16(this.canvas, this.ctx,
                                         this.note16x, this.note16y,
                                         this.note16my);
    note1.drawNote();
    const note17 = new NoteBlocks.Note17(this.canvas, this.ctx,
                                         this.note17x, this.note17y,
                                         this.note17my);
    note1.drawNote();
    note2.drawNote();
    note3.drawNote();
    note4.drawNote();
    note5.drawNote();
    note6.drawNote();
    note7.drawNote();
    note8.drawNote();
    note9.drawNote();
    note10.drawNote();
    note11.drawNote();
    note12.drawNote();
    note13.drawNote();
    note14.drawNote();
    note15.drawNote();
    note16.drawNote();
    note17.drawNote();

    requestAnimationFrame(this.draw.bind(this));
  }
}

module.exports = Game;
