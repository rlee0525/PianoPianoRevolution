/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Piano = __webpack_require__(2);
	var Game = __webpack_require__(1);
	
	document.addEventListener("DOMContentLoaded", function () {
	  var pianoCanvas = document.getElementById('piano-canvas');
	  var pianoCtx = pianoCanvas.getContext('2d');
	  var gameCanvas = document.getElementById('game-canvas');
	  var gameCtx = gameCanvas.getContext('2d');
	
	  window.addEventListener('resize', resizeCanvas, false);
	
	  function resizeCanvas() {
	    pianoCanvas.width = window.innerWidth;
	    pianoCanvas.height = window.innerHeight;
	    gameCanvas.width = 700;
	    gameCanvas.height = window.innerHeight - 252;
	
	    var piano = new Piano(pianoCanvas, pianoCtx);
	    var game = new Game(gameCanvas, gameCtx);
	    piano.draw();
	    game.draw();
	  }
	
	  resizeCanvas();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Lines = __webpack_require__(3);
	var NoteBlocks = __webpack_require__(4);
	
	var Game = function () {
	  function Game(canvas, ctx) {
	    _classCallCheck(this, Game);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.note1x = 0;
	    this.note1y = 0;
	    this.note1my = 5;
	  }
	
	  _createClass(Game, [{
	    key: 'draw',
	    value: function draw() {
	      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
	      var lines = new Lines(this.canvas, this.ctx);
	      lines.drawLines();
	
	      if (this.note1y > this.canvas.height - 45) {
	        this.note1y = 0;
	      }
	
	      this.note1y += this.note1my;
	
	      var note1 = new NoteBlocks.Note1(this.canvas, this.ctx, this.note1x, this.note1y, this.note1my);
	      note1.drawNote();
	
	      requestAnimationFrame(this.draw.bind(this));
	    }
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Piano = function () {
	  function Piano(canvas, ctx) {
	    _classCallCheck(this, Piano);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	  }
	
	  _createClass(Piano, [{
	    key: "draw",
	    value: function draw() {
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(50, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(120, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(95, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(190, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(165, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(260, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(330, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(305, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(400, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(375, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(470, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(445, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(540, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(610, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(585, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "white";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(680, this.canvas.height - 250, 70, 200);
	      this.ctx.stroke();
	      this.ctx.fill();
	
	      this.ctx.beginPath();
	      this.ctx.lineWidth = "2";
	      this.ctx.fillStyle = "black";
	      this.ctx.strokeStyle = "black";
	      this.ctx.rect(655, this.canvas.height - 250, 50, 120);
	      this.ctx.stroke();
	      this.ctx.fill();
	    }
	  }]);
	
	  return Piano;
	}();
	
	module.exports = Piano;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Lines = function () {
	  function Lines(canvas, ctx) {
	    _classCallCheck(this, Lines);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.color = "#00BFA5";
	  }
	
	  _createClass(Lines, [{
	    key: "drawLines",
	    value: function drawLines() {
	      this.ctx.beginPath();
	      this.ctx.moveTo(0, this.canvas.height - 20);
	      this.ctx.lineTo(this.canvas.width, this.canvas.height - 20);
	      this.ctx.strokeStyle = this.color;
	      this.ctx.stroke();
	
	      this.ctx.beginPath();
	      this.ctx.moveTo(210, 0);
	      this.ctx.lineTo(210, this.canvas.height - 20);
	      this.ctx.strokeStyle = this.color;
	      this.ctx.stroke();
	
	      this.ctx.beginPath();
	      this.ctx.moveTo(490, 0);
	      this.ctx.lineTo(490, this.canvas.height - 20);
	      this.ctx.strokeStyle = this.color;
	      this.ctx.stroke();
	    }
	  }]);
	
	  return Lines;
	}();
	
	module.exports = Lines;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Note1 = function () {
	  function Note1(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note1);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note1, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note1;
	}();
	
	module.exports = {
	  Note1: Note1
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map