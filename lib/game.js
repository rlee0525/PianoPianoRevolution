export default function Game() {
  let canvas = document.getElementById('my-canvas');
  let context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStuff();
  }
  resizeCanvas();

  function drawStuff() {

  }
}
