export default function Game() {
  let canvas = document.getElementById('my-canvas');
  let ctx = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
  }
  resizeCanvas();

  function draw() {
    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(50, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(120, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(95, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(190, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(165, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(260, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(330, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(305, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(400, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(375, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(470, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(445, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(540, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(610, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(585, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.rect(680, canvas.height - 250, 70, 200);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.rect(655, canvas.height - 250, 50, 120);
    ctx.stroke();
    ctx.fill();
  }
}
