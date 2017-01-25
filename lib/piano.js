class Piano {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(50, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(120, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(95, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(190, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(165, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(260, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(330, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(305, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(400, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(375, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(470, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(445, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(540, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(610, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(585, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle="black";
    this.ctx.rect(680, this.canvas.height - 250, 70, 200);
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.lineWidth="2";
    this.ctx.fillStyle="black";
    this.ctx.strokeStyle="black";
    this.ctx.rect(655, this.canvas.height - 250, 50, 120);
    this.ctx.stroke();
    this.ctx.fill();
  }
}

module.exports = Piano;
