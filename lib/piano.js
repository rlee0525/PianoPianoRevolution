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

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("2", 110, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("3", 180, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("5", 320, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("6", 390, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("7", 460, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("9", 600, this.canvas.height - 150);

    this.ctx.font = "30px Permanent Marker";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("0", 670, this.canvas.height - 150);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Q", 70, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("W", 140, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("E", 210, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("R", 280, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("T", 350, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Y", 420, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("U", 490, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("I", 570, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("O", 630, this.canvas.height - 75);

    this.ctx.font = "35px Permanent Marker";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("P", 700, this.canvas.height - 75);
  }
}

module.exports = Piano;
