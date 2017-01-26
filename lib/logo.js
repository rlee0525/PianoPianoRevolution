const anime = require('animejs');

const start = function() {

  let title = document.getElementById("logo");

  let textAnimationDown = anime ({
    targets: title,
    translateY: '30rem',
    duration: 500,
    loop: false,
    autoplay: false
  });

  let titleAnimationUp = anime ({
    targets: title,
    translateY: '-30rem',
    duration: 1000,
    loop: false,
    easing: 'easeOutCirc',
    complete: textAnimationDown.play
  });
};

module.exports = start;
