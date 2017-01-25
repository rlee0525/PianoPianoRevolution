const Blocks = require('./blocks');
import _ from 'lodash';

class EasySong {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.whiteCoords = [3, 85, 167, 211, 291, 371, 451, 493, 575, 657];
    this.blackCoords = [44, 126, 251, 331, 411, 534, 616];
    this.yCoords = _.range(0, -5000, -50);
  }

  notes() {
    const easySong = [];
    let length = this.yCoords.length;

    for (var i = 0; i < 10; i++) {
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
