const Lines = require('./lines');
const Blocks = require('./blocks');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.note1y = 0;
    this.note2y = 0;
    this.note3y = 0;
    this.note4y = 0;
    this.note5y = 0;
    this.note6y = 0;
    this.note7y = 0;
    this.note8y = 0;
    this.note9y = 0;
    this.note10y = 0;
    this.note11y = 0;
    this.note12y = 0;
    this.note13y = 0;
    this.note14y = 0;
    this.note15y = 0;
    this.note16y = 0;
    this.note17y = 0;

    this.note1my = 7;
    this.note2my = 2;
    this.note3my = 3;
    this.note4my = 2;
    this.note5my = 5;
    this.note6my = 4;
    this.note7my = 7;
    this.note8my = 9;
    this.note9my = 10;
    this.note10my = 8;
    this.note11my = 12;
    this.note12my = 4;
    this.note13my = 3;
    this.note14my = 6;
    this.note15my = 8;
    this.note16my = 2;
    this.note17my = 5;

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


    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  keyUp(e) {
    if(e.keyCode === 81) {
        this.pressedQ = true;
    } else if (e.keyCode === 50) {
        this.pressed2 = true;
    } else if (e.keyCode === 87) {
        this.pressedW = true;
    } else if (e.keyCode === 51) {
        this.pressed3 = true;
    } else if (e.keyCode === 69) {
        this.pressedE = true;
    } else if (e.keyCode === 82) {
        this.pressedR = true;
    } else if (e.keyCode === 53) {
        this.pressed5 = true;
    } else if (e.keyCode === 84) {
        this.pressedT = true;
    } else if (e.keyCode === 54) {
        this.pressed6 = true;
    } else if (e.keyCode === 89) {
        this.pressedY = true;
    } else if (e.keyCode === 55) {
        this.pressed7 = true;
    } else if (e.keyCode === 85) {
        this.pressedU = true;
    } else if (e.keyCode === 73) {
        this.pressedI = true;
    } else if (e.keyCode === 57) {
        this.pressed9 = true;
    } else if (e.keyCode === 79) {
        this.pressedO = true;
    } else if (e.keyCode === 48) {
        this.pressed0 = true;
    } else if (e.keyCode === 80) {
        this.pressedP = true;
    }
  }

  keyDown(e) {
    if(e.keyCode === 81) {
        this.pressedQ = false;
    } else if (e.keyCode === 50) {
        this.pressed2 = false;
    } else if (e.keyCode === 87) {
        this.pressedW = false;
    } else if (e.keyCode === 51) {
        this.pressed3 = false;
    } else if (e.keyCode === 69) {
        this.pressedE = false;
    } else if (e.keyCode === 82) {
        this.pressedR = false;
    } else if (e.keyCode === 53) {
        this.pressed5 = false;
    } else if (e.keyCode === 84) {
        this.pressedT = false;
    } else if (e.keyCode === 54) {
        this.pressed6 = false;
    } else if (e.keyCode === 89) {
        this.pressedY = false;
    } else if (e.keyCode === 55) {
        this.pressed7 = false;
    } else if (e.keyCode === 85) {
        this.pressedU = false;
    } else if (e.keyCode === 73) {
        this.pressedI = false;
    } else if (e.keyCode === 57) {
        this.pressed9 = false;
    } else if (e.keyCode === 79) {
        this.pressedO = false;
    } else if (e.keyCode === 48) {
        this.pressed0 = false;
    } else if (e.keyCode === 80) {
        this.pressedP = false;
    }
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

    const note1 = new Blocks.Block(this.canvas, this.ctx, 3, this.note1y, this.note1my, "#00BFA5");
    const note2 = new Blocks.Block(this.canvas, this.ctx, 44, this.note2y, this.note2my, "#EEFF41");
    const note3 = new Blocks.Block(this.canvas, this.ctx, 85, this.note3y, this.note3my, "#00BFA5");
    const note4 = new Blocks.Block(this.canvas, this.ctx, 126, this.note4y, this.note4my, "#EEFF41");
    const note5 = new Blocks.Block(this.canvas, this.ctx, 167, this.note5y, this.note5my, "#00BFA5");
    const note6 = new Blocks.Block(this.canvas, this.ctx, 211, this.note6y, this.note6my, "#00BFA5");
    const note7 = new Blocks.Block(this.canvas, this.ctx, 251, this.note7y, this.note7my, "#EEFF41");
    const note8 = new Blocks.Block(this.canvas, this.ctx, 291, this.note8y, this.note8my, "#00BFA5");
    const note9 = new Blocks.Block(this.canvas, this.ctx, 331, this.note9y, this.note9my, "#EEFF41");
    const note10 = new Blocks.Block(this.canvas, this.ctx, 371, this.note10y, this.note10my, "#00BFA5");
    const note11 = new Blocks.Block(this.canvas, this.ctx, 411, this.note11y, this.note11my, "#EEFF41");
    const note12 = new Blocks.Block(this.canvas, this.ctx, 451, this.note12y, this.note12my, "#00BFA5");
    const note13 = new Blocks.Block(this.canvas, this.ctx, 493, this.note13y, this.note13my, "#00BFA5");
    const note14 = new Blocks.Block(this.canvas, this.ctx, 534, this.note14y, this.note14my, "#EEFF41");
    const note15 = new Blocks.Block(this.canvas, this.ctx, 575, this.note15y, this.note15my, "#00BFA5");
    const note16 = new Blocks.Block(this.canvas, this.ctx, 616, this.note16y, this.note16my, "#EEFF41");
    const note17 = new Blocks.Block(this.canvas, this.ctx, 657, this.note17y, this.note17my, "#00BFA5");

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
