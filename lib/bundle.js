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

	'use strict';
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _game2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Game;
	function Game() {
	  var canvas = document.getElementById('my-canvas');
	  var ctx = canvas.getContext('2d');
	
	  window.addEventListener('resize', resizeCanvas, false);
	
	  function resizeCanvas() {
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	
	    draw();
	  }
	  resizeCanvas();
	
	  function draw() {
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(50, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(120, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(95, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(190, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(165, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(260, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(330, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(305, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(400, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(375, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(470, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(445, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(540, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(610, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(585, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.rect(680, canvas.height - 250, 70, 200);
	    ctx.stroke();
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.lineWidth = "2";
	    ctx.fillStyle = "black";
	    ctx.strokeStyle = "black";
	    ctx.rect(655, canvas.height - 250, 50, 120);
	    ctx.stroke();
	    ctx.fill();
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map