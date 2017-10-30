'use strict';
var canvas, ctx;
var gameInstance;
const HARDCODED_FPS = 30; // cinematic experience
var currentFrameTime, lastFrameTime, dt;

let boxes = [];

function Box (x, y, w, h) {
  this.w = w || 50;
  this.h = h || 50;
  this.x = x || canvas.width / 2 - this.w / 2;
  this.y = y || canvas.height / 2 - this.h / 2;
  this.xa = 2;
  this.ya = 2;
  this.color = 'black';
  // this.num = Math.ceil(Math.random() * 8999) + 1000;
}

// prototypes allow you to make object methods
// Box.prototype.lol = function () {
//   console.log('lmao I\'m box #' + this.num);
// };

function update () {
  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].x += boxes[i].xa * dt;
    boxes[i].y += boxes[i].ya * dt;

    if (boxes[i].x + boxes[i].w > canvas.width || boxes[i].x < 0) {
      boxes[i].xa *= -1;
    }

    if (boxes[i].y + boxes[i].h > canvas.height || boxes[i].y < 0) {
      boxes[i].ya *= -1;
    }
  }
}

function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  for (let i = boxes.length - 1; i >= 0; i--) {
    ctx.fillStyle = boxes[i].color;
    ctx.fillRect(boxes[i].x, boxes[i].y, boxes[i].w, boxes[i].h);
  }
}

function run () {
  currentFrameTime = performance.now();
  dt = currentFrameTime - lastFrameTime;
  lastFrameTime = currentFrameTime;

  update();
  draw();
}

function startGame () {
  if (gameInstance) {
    clearInterval(gameInstance);
    boxes.length = 0;
  }

  lastFrameTime = performance.now();
  boxes.push(new Box());

  gameInstance = setInterval(run, 1000 / HARDCODED_FPS);
}

window.addEventListener('load', function () {
  canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');

  startGame();
});
