'use strict';
var canvas, ctx;

function startGame () {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('load', function () {
  canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');

  startGame();
});
