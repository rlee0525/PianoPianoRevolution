const Piano = require("./piano");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const pianoCanvas = document.getElementById('piano-canvas');
  const pianoCtx = pianoCanvas.getContext('2d');
  const gameCanvas = document.getElementById('game-canvas');
  const gameCtx = gameCanvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    pianoCanvas.width = window.innerWidth;
    pianoCanvas.height = window.innerHeight;
    gameCanvas.width = 700;
    gameCanvas.height = window.innerHeight - 252;

    const piano = new Piano(pianoCanvas, pianoCtx);
    const game = new Game(gameCanvas, gameCtx);
    piano.draw();
    game.draw();
  }

  resizeCanvas();
});
