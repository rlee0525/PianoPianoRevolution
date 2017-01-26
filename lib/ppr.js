const Game = require("./game");
const Logo = require("./logo.js");
import Howler from './howler.min.js';
import Animations from './animations';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('game-canvas');
  const gameCtx = gameCanvas.getContext('2d');
  Logo();

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;

    const game = new Game(gameCanvas, gameCtx);
    game.draw();

    Animations(gameCanvas, gameCtx);

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if(e.keyCode === 81) {
          game.pressedQ = true;
          // var c3 = new Howl({
          //   src: ["sounds/0c3.wav"],
          //   volume: 0.2
          // });
          // c3.play();
        } else if (e.keyCode === 50) {
          game.pressed2 = true;
          // var cs3 = new Howl({
          //   src: ["sounds/1cs3.wav"],
          //   volume: 0.2
          // });
          // cs3.play();
        } else if (e.keyCode === 87) {
          game.pressedW = true;
          // var d3 = new Howl({
          //   src: ["sounds/2d3.wav"],
          //   volume: 0.2
          // });
          // d3.play();
        } else if (e.keyCode === 51) {
          game.pressed3 = true;
          // var ds3 = new Howl({
          //   src: ["sounds/3ds3.wav"],
          //   volume: 0.2
          // });
          // ds3.play();
        } else if (e.keyCode === 69) {
          game.pressedE = true;
          // var e3 = new Howl({
          //   src: ["sounds/4e3.wav"],
          //   volume: 0.2
          // });
          // e3.play();
        } else if (e.keyCode === 82) {
          game.pressedR = true;
          // var f3 = new Howl({
          //   src: ["sounds/5f3.wav"],
          //   volume: 0.2
          // });
          // f3.play();
        } else if (e.keyCode === 53) {
          game.pressed5 = true;
          // var fs3 = new Howl({
          //   src: ["sounds/6fs3.wav"],
          //   volume: 0.2
          // });
          // fs3.play();
        } else if (e.keyCode === 84) {
          game.pressedT = true;
          // var g3 = new Howl({
          //   src: ["sounds/7g3.wav"],
          //   volume: 0.2
          // });
          // g3.play();
        } else if (e.keyCode === 54) {
          game.pressed6 = true;
          // var gs3 = new Howl({
          //   src: ["sounds/8gs3.wav"],
          //   volume: 0.2
          // });
          // gs3.play();
        } else if (e.keyCode === 89) {
          game.pressedY = true;
          // var a3 = new Howl({
          //   src: ["sounds/9a3.wav"],
          //   volume: 0.2
          // });
          // a3.play();
        } else if (e.keyCode === 55) {
          game.pressed7 = true;
          // var as3 = new Howl({
          //   src: ["sounds/10as3.wav"],
          //   volume: 0.2
          // });
          // as3.play();
        } else if (e.keyCode === 85) {
          game.pressedU = true;
          // var b3 = new Howl({
          //   src: ["sounds/11b3.wav"],
          //   volume: 0.2
          // });
          // b3.play();
        } else if (e.keyCode === 73) {
          game.pressedI = true;
          // var c4 = new Howl({
          //   src: ["sounds/12c4.wav"],
          //   volume: 0.2
          // });
          // c4.play();
        } else if (e.keyCode === 57) {
          game.pressed9 = true;
          // var cs4 = new Howl({
          //   src: ["sounds/13cs4.wav"],
          //   volume: 0.2
          // });
          // cs4.play();
        } else if (e.keyCode === 79) {
          game.pressedO = true;
          // var d4 = new Howl({
          //   src: ["sounds/14d4.wav"],
          //   volume: 0.2
          // });
          // d4.play();
        } else if (e.keyCode === 48) {
          game.pressed0 = true;
          // var ds4 = new Howl({
          //   src: ["sounds/15ds4.wav"],
          //   volume: 0.2
          // });
          // ds4.play();
        } else if (e.keyCode === 80) {
          game.pressedP = true;
          // var e4 = new Howl({
          //   src: ["sounds/16e4.wav"],
          //   volume: 0.2
          // });
          // e4.play();
        }
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();

      if(e.keyCode === 81) {
          game.pressedQ = false;
        } else if (e.keyCode === 50) {
          game.pressed2 = false;
        } else if (e.keyCode === 87) {
          game.pressedW = false;
        } else if (e.keyCode === 51) {
          game.pressed3 = false;
        } else if (e.keyCode === 69) {
          game.pressedE = false;
        } else if (e.keyCode === 82) {
          game.pressedR = false;
        } else if (e.keyCode === 53) {
          game.pressed5 = false;
        } else if (e.keyCode === 84) {
          game.pressedT = false;
        } else if (e.keyCode === 54) {
          game.pressed6 = false;
        } else if (e.keyCode === 89) {
          game.pressedY = false;
        } else if (e.keyCode === 55) {
          game.pressed7 = false;
        } else if (e.keyCode === 85) {
          game.pressedU = false;
        } else if (e.keyCode === 73) {
          game.pressedI = false;
        } else if (e.keyCode === 57) {
          game.pressed9 = false;
        } else if (e.keyCode === 79) {
          game.pressedO = false;
        } else if (e.keyCode === 48) {
          game.pressed0 = false;
        } else if (e.keyCode === 80) {
          game.pressedP = false;
        }
      });
  }

  resizeCanvas();
});
