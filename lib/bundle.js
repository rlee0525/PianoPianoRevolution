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
	
	var Piano = __webpack_require__(1);
	var Game = __webpack_require__(2);
	
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
/* 2 */
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
	    this.note2x = 45;
	    this.note2y = 0;
	    this.note2my = 4;
	    this.note3x = 82.5;
	    this.note3y = 0;
	    this.note3my = 2;
	    this.note4x = 127.5;
	    this.note4y = 0;
	    this.note4my = 3;
	    this.note5x = 165;
	    this.note5y = 0;
	    this.note5my = 9;
	    this.note6x = 210;
	    this.note6y = 0;
	    this.note6my = 7;
	    this.note7x = 255;
	    this.note7y = 0;
	    this.note7my = 6;
	    this.note8x = 292.5;
	    this.note8y = 0;
	    this.note8my = 1;
	    this.note9x = 337.5;
	    this.note9y = 0;
	    this.note9my = 8;
	    this.note10x = 375;
	    this.note10y = 0;
	    this.note10my = 10;
	    this.note11x = 415;
	    this.note11y = 0;
	    this.note11my = 2;
	    this.note12x = 452.5;
	    this.note12y = 0;
	    this.note12my = 4;
	    this.note13x = 490;
	    this.note13y = 0;
	    this.note13my = 5;
	    this.note14x = 535;
	    this.note14y = 0;
	    this.note14my = 7;
	    this.note15x = 572.5;
	    this.note15y = 0;
	    this.note15my = 6;
	    this.note16x = 617.5;
	    this.note16y = 0;
	    this.note16my = 3;
	    this.note17x = 655;
	    this.note17y = 0;
	    this.note17my = 8;
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
	
	      if (this.note2y > this.canvas.height - 45) {
	        this.note2y = 0;
	      }
	
	      if (this.note3y > this.canvas.height - 45) {
	        this.note3y = 0;
	      }
	
	      if (this.note4y > this.canvas.height - 45) {
	        this.note4y = 0;
	      }
	
	      if (this.note5y > this.canvas.height - 45) {
	        this.note5y = 0;
	      }
	
	      if (this.note6y > this.canvas.height - 45) {
	        this.note6y = 0;
	      }
	
	      if (this.note7y > this.canvas.height - 45) {
	        this.note7y = 0;
	      }
	
	      if (this.note8y > this.canvas.height - 45) {
	        this.note8y = 0;
	      }
	
	      if (this.note9y > this.canvas.height - 45) {
	        this.note9y = 0;
	      }
	
	      if (this.note10y > this.canvas.height - 45) {
	        this.note10y = 0;
	      }
	
	      if (this.note11y > this.canvas.height - 45) {
	        this.note11y = 0;
	      }
	
	      if (this.note12y > this.canvas.height - 45) {
	        this.note12y = 0;
	      }
	
	      if (this.note13y > this.canvas.height - 45) {
	        this.note13y = 0;
	      }
	
	      if (this.note14y > this.canvas.height - 45) {
	        this.note14y = 0;
	      }
	
	      if (this.note15y > this.canvas.height - 45) {
	        this.note15y = 0;
	      }
	
	      if (this.note16y > this.canvas.height - 45) {
	        this.note16y = 0;
	      }
	
	      if (this.note17y > this.canvas.height - 45) {
	        this.note17y = 0;
	      }
	
	      this.note1y += this.note1my;
	      this.note2y += this.note2my;
	      this.note3y += this.note3my;
	      this.note4y += this.note4my;
	      this.note5y += this.note5my;
	      this.note6y += this.note6my;
	      this.note7y += this.note7my;
	      this.note8y += this.note8my;
	      this.note9y += this.note9my;
	      this.note10y += this.note10my;
	      this.note11y += this.note11my;
	      this.note12y += this.note12my;
	      this.note13y += this.note13my;
	      this.note14y += this.note14my;
	      this.note15y += this.note15my;
	      this.note16y += this.note16my;
	      this.note17y += this.note17my;
	
	      var note1 = new NoteBlocks.Note1(this.canvas, this.ctx, this.note1x, this.note1y, this.note1my);
	      note1.drawNote();
	      var note2 = new NoteBlocks.Note2(this.canvas, this.ctx, this.note2x, this.note2y, this.note2my);
	      note1.drawNote();
	      var note3 = new NoteBlocks.Note3(this.canvas, this.ctx, this.note3x, this.note3y, this.note3my);
	      note1.drawNote();
	      var note4 = new NoteBlocks.Note4(this.canvas, this.ctx, this.note4x, this.note4y, this.note4my);
	      note1.drawNote();
	      var note5 = new NoteBlocks.Note5(this.canvas, this.ctx, this.note5x, this.note5y, this.note5my);
	      note1.drawNote();
	      var note6 = new NoteBlocks.Note6(this.canvas, this.ctx, this.note6x, this.note6y, this.note6my);
	      note1.drawNote();
	      var note7 = new NoteBlocks.Note7(this.canvas, this.ctx, this.note7x, this.note7y, this.note7my);
	      note1.drawNote();
	      var note8 = new NoteBlocks.Note8(this.canvas, this.ctx, this.note8x, this.note8y, this.note8my);
	      note1.drawNote();
	      var note9 = new NoteBlocks.Note9(this.canvas, this.ctx, this.note9x, this.note9y, this.note9my);
	      note1.drawNote();
	      var note10 = new NoteBlocks.Note10(this.canvas, this.ctx, this.note10x, this.note10y, this.note10my);
	      note1.drawNote();
	      var note11 = new NoteBlocks.Note11(this.canvas, this.ctx, this.note11x, this.note11y, this.note11my);
	      note1.drawNote();
	      var note12 = new NoteBlocks.Note12(this.canvas, this.ctx, this.note12x, this.note12y, this.note12my);
	      note1.drawNote();
	      var note13 = new NoteBlocks.Note13(this.canvas, this.ctx, this.note13x, this.note13y, this.note13my);
	      note1.drawNote();
	      var note14 = new NoteBlocks.Note14(this.canvas, this.ctx, this.note14x, this.note14y, this.note14my);
	      note1.drawNote();
	      var note15 = new NoteBlocks.Note15(this.canvas, this.ctx, this.note15x, this.note15y, this.note15my);
	      note1.drawNote();
	      var note16 = new NoteBlocks.Note16(this.canvas, this.ctx, this.note16x, this.note16y, this.note16my);
	      note1.drawNote();
	      var note17 = new NoteBlocks.Note17(this.canvas, this.ctx, this.note17x, this.note17y, this.note17my);
	      note1.drawNote();
	      note2.drawNote();
	      note3.drawNote();
	      note4.drawNote();
	      note5.drawNote();
	      note6.drawNote();
	      note7.drawNote();
	      note8.drawNote();
	      note9.drawNote();
	      note10.drawNote();
	      note11.drawNote();
	      note12.drawNote();
	      note13.drawNote();
	      note14.drawNote();
	      note15.drawNote();
	      note16.drawNote();
	      note17.drawNote();
	
	      requestAnimationFrame(this.draw.bind(this));
	    }
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

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
	
	var Note2 = function () {
	  function Note2(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note2);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note2, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note2;
	}();
	
	var Note3 = function () {
	  function Note3(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note3);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note3, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note3;
	}();
	
	var Note4 = function () {
	  function Note4(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note4);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note4, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note4;
	}();
	
	var Note5 = function () {
	  function Note5(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note5);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note5, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note5;
	}();
	
	var Note6 = function () {
	  function Note6(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note6);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note6, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note6;
	}();
	
	var Note7 = function () {
	  function Note7(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note7);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note7, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note7;
	}();
	
	var Note8 = function () {
	  function Note8(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note8);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note8, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note8;
	}();
	
	var Note9 = function () {
	  function Note9(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note9);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note9, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note9;
	}();
	
	var Note10 = function () {
	  function Note10(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note10);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note10, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 40, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note10;
	}();
	
	var Note11 = function () {
	  function Note11(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note11);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note11, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note11;
	}();
	
	var Note12 = function () {
	  function Note12(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note12);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note12, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note12;
	}();
	
	var Note13 = function () {
	  function Note13(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note13);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note13, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note13;
	}();
	
	var Note14 = function () {
	  function Note14(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note14);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note14, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note14;
	}();
	
	var Note15 = function () {
	  function Note15(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note15);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note15, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note15;
	}();
	
	var Note16 = function () {
	  function Note16(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note16);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note16, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 37.5, 30);
	      this.ctx.fillStyle = "#EEFF41";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note16;
	}();
	
	var Note17 = function () {
	  function Note17(canvas, ctx, x, y, my) {
	    _classCallCheck(this, Note17);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.my = my;
	  }
	
	  _createClass(Note17, [{
	    key: "drawNote",
	    value: function drawNote() {
	      this.ctx.beginPath();
	      this.ctx.rect(this.x, this.y, 45, 30);
	      this.ctx.fillStyle = "#00BFA5";
	      this.ctx.fill();
	      this.ctx.closePath();
	    }
	  }]);
	
	  return Note17;
	}();
	
	module.exports = {
	  Note1: Note1,
	  Note2: Note2,
	  Note3: Note3,
	  Note4: Note4,
	  Note5: Note5,
	  Note6: Note6,
	  Note7: Note7,
	  Note8: Note8,
	  Note9: Note9,
	  Note10: Note10,
	  Note11: Note11,
	  Note12: Note12,
	  Note13: Note13,
	  Note14: Note14,
	  Note15: Note15,
	  Note16: Note16,
	  Note17: Note17
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map