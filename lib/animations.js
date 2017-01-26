import anime from 'animejs';

const Animations = (canvas, ctx) => {
  let numParticles = 30;
  let distance = 300;
  let animations = [];
  let xCoord;
  let yCoord;

  let colorSets = [
    ['#F25F5C', '#FFE066', '#247BA0', '#70C1B3'],
    ['#B8336A', '#C490D1', '#ACACDE', '#ABDAFC'],
    ['#C3C3E6', '#D1C8E1', '#B370B0', '#87255B'],
    ['#7C606B', '#C46BAE', '#EB7BC0', '#EDA4BD'],
    ['#D72638', '#3F88C5', '#F49D37', '#F22B29'],
    ['#B5F44A', '#70EE9C', '#79AEA3', '#434371'],
    ['#DB5461', '#FFD9CE', '#593C8F', '#8EF9F3'],
    ['#C5FFFD', '#88D9E6', '#8B8BAE', '#526760'],
    ['#CDF7F6', '#8FB8DE', '#9A94BC', '#9B5094'],
    ['#ED1C24', '#FDFFFC', '#235789', '#F1D302'],
    ['#F4F7BE', '#E5F77D', '#DEBA6F', '#823038'],
    ['#BBE5ED', '#BFBCCB', '#B399A2', '#986C6A'],
    ['#3B0D11', '#6A3937', '#706563', '#748386'],
    ['#CAFFD0', '#C9E4E7', '#B4A0E5', '#CA3CFF'],
    ['#75DDDD', '#508991', '#004346', '#09BC8A'],
    ['#336699', '#86BBD8', '#9EE493', '#DAF7DC'],
    ['#DA2C38', '#226F54', '#F4F0BB', '#43291F']
  ];

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const fontSize = () => {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  };

  const nextColor = () => {
    let temp = colorSets.shift();
    colorSets.push(temp);
  };

  const removeAnimation = (animation) => {
    let index = animations.indexOf(animation);
    if (index > -1) {
      animations.splice(index, 1);
    }
  };

  const drawRipple = (x, y) => {
    let colors = colorSets[0];
    let ripple = {};

    ripple.x = x;
    ripple.y = y;
    ripple.r = 0;
    ripple.alpha = 1;
    ripple.color = colors[anime.random(0, colors.length - 1)];
    ripple.lineWidth = 6;

    ripple.draw = () => {
      ctx.globalAlpha = ripple.alpha;
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.r, 2 * Math.PI, false);
      ctx.lineWidth = ripple.lineWidth;
      ctx.strokeStyle = ripple.color;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    return ripple;
  };

  const drawParticle = (x, y) => {
    let colors = colorSets[0];
    let particle = {};
    particle.x = x;
    particle.y = y;
    particle.color = colors[anime.random(0, colors.length - 1)];
    particle.radius = anime.random(fontSize(), fontSize() * 2);

    particle.draw = function() {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 2 * Math.PI, false);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    return particle;
  };

  const drawParticles = (x, y) => {
    let particles = [];
    for (var i = 0; i < numParticles; i++) {
      let particle = drawParticle(x, y);
      particles.push(particle);
    }

    return particles;
  };

  const animateParticles = (x, y) => {
    resizeCanvas();

    let particles = drawParticles(x, y);
    let ripple1 = drawRipple(x, y);
    let ripple2 = drawRipple(x, y);
    let ripple3 = drawRipple(x, y);

    let particlesAnimation = anime({
      targets: particles,
      x: particle => (particle.x + anime.random(-distance, distance)),
      y: particle => (particle.y + anime.random(-distance, distance)),
      radius: 0,
      duration: () => (anime.random(1200, 1800)),
      easing: 'easeOutExpo',
      complete: removeAnimation
    });

    let rippleAnimation1 = anime({
      targets: ripple1,
      r: () => (anime.random(fontSize() * 5, fontSize() * 7)),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: () => (anime.random(400, 600))
      },
      duration: () => anime.random(1200, 1800),
      easing: 'easeOutExpo',
      complete: removeAnimation
    });

    let rippleAnimation2 = anime({
      targets: ripple2,
      r: () => (anime.random(fontSize() * 8, fontSize() * 10)),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: () => (anime.random(400, 600))
      },
      duration: () => anime.random(1200, 1800),
      easing: 'easeOutExpo',
      complete: removeAnimation
    });

    let rippleAnimation3 = anime({
      targets: ripple3,
      r: () => (anime.random(fontSize() * 11, fontSize() * 13)),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: () => (anime.random(400, 600))
      },
      duration: () => anime.random(1200, 1800),
      easing: 'easeOutExpo',
      complete: removeAnimation
    });

    animations.push(particlesAnimation);
    animations.push(rippleAnimation1);
    animations.push(rippleAnimation2);
    animations.push(rippleAnimation3);
  };

  const animate = anime({
    duration: Infinity,
    update: () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach(ani => {
        ani.animatables.forEach(animatable => {
          animatable.target.draw();
        });
      });
    }
  });

  const updateCoords = () => {
    xCoord = Math.random() * canvas.width;
    yCoord = Math.random() * canvas.height;
  };

  document.addEventListener("keydown", e => {
    e.preventDefault();

    if ((e.keyCode === 81) ||
        (e.keyCode === 50) ||
        (e.keyCode === 87) ||
        (e.keyCode === 51) ||
        (e.keyCode === 69) ||
        (e.keyCode === 82) ||
        (e.keyCode === 53) ||
        (e.keyCode === 84) ||
        (e.keyCode === 54) ||
        (e.keyCode === 89) ||
        (e.keyCode === 55) ||
        (e.keyCode === 85) ||
        (e.keyCode === 73) ||
        (e.keyCode === 57) ||
        (e.keyCode === 79) ||
        (e.keyCode === 48) ||
        (e.keyCode === 80)) {
      updateCoords();
      animateParticles(xCoord, yCoord);
      nextColor();
    }
  });

  window.addEventListener('resize', resizeCanvas);
};

export default Animations;
