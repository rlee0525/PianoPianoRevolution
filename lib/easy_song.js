const Blocks = require('./blocks');
import _ from 'lodash';

class EasySong {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.whiteCoords = [53, 135, 217, 261, 341, 421, 501, 543, 625, 707];
    this.blackCoords = [94, 176, 301, 381, 461, 584, 666];
    this.yCoords = _.range(0, -20000, -50);
  }

  notes() {
    const easySong = [];
    let length = this.yCoords.length;

    for (var i = 0; i < 50; i++) {
      let wx = this.whiteCoords[Math.floor((Math.random() * 10))];
      let wy = this.yCoords[Math.floor((Math.random() * length))];
      easySong.push(new Blocks.WhiteKey(this.canvas, this.ctx, wx, wy));

      let bx = this.blackCoords[Math.floor((Math.random() * 7))];
      let by = this.yCoords[Math.floor((Math.random() * length))];
      easySong.push(new Blocks.BlackKey(this.canvas, this.ctx, bx, by));
    }

    return easySong;
  }
}

module.exports = EasySong;
