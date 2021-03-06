const Game = require("./game");
import Howler from './howler.min.js';
import Animations from './animations';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('game-canvas');
  const gameCtx = gameCanvas.getContext('2d');
  const fireworksCanvas = document.getElementById('fireworks-canvas');
  const fireworksCtx = fireworksCanvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    gameCanvas.width = 800;
    gameCanvas.height = window.innerHeight;

    const game = new Game(gameCanvas, gameCtx);

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", () => {
      game.draw();
      const speedButton = document.getElementById("faster");
      speedButton.addEventListener("click", () => (
        game.draw()
      ));
    });


    Animations(fireworksCanvas, fireworksCtx);

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.keyCode === 81) {
          game.pressedQ = true;
        } else if (e.keyCode === 50) {
          game.pressed2 = true;
        } else if (e.keyCode === 87) {
          game.pressedW = true;
        } else if (e.keyCode === 51) {
          game.pressed3 = true;
        } else if (e.keyCode === 69) {
          game.pressedE = true;
        } else if (e.keyCode === 82) {
          game.pressedR = true;
        } else if (e.keyCode === 53) {
          game.pressed5 = true;
        } else if (e.keyCode === 84) {
          game.pressedT = true;
        } else if (e.keyCode === 54) {
          game.pressed6 = true;
        } else if (e.keyCode === 89) {
          game.pressedY = true;
        } else if (e.keyCode === 55) {
          game.pressed7 = true;
        } else if (e.keyCode === 85) {
          game.pressedU = true;
        } else if (e.keyCode === 73) {
          game.pressedI = true;
        } else if (e.keyCode === 57) {
          game.pressed9 = true;
        } else if (e.keyCode === 79) {
          game.pressedO = true;
        } else if (e.keyCode === 48) {
          game.pressed0 = true;
        } else if (e.keyCode === 80) {
          game.pressedP = true;
        }
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();

      if (e.keyCode === 81) {
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
