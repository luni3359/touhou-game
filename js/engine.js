"use strict";
const touhouGame = {
    name: "touhou",
    resolution: {},
    canvas: null,
    start: startGame
};

/**
 * Checks whether or not the canvas exists and, if it isn't
 * then create it.
 */
function checkCanvas() {
    if (!document.querySelector("canvas.danmaku")) {
        // Set resolution
        touhouGame.resolution = { w: 800, h: 600 };

        // Make canvas element
        touhouGame.canvas = document.createElement("canvas");
        touhouGame.canvas.id = touhouGame.name;
        touhouGame.canvas.classList.add("danmaku");
        touhouGame.canvas.width = touhouGame.resolution.w;
        touhouGame.canvas.height = touhouGame.resolution.h;

        // Add to DOM
        document.body.appendChild(touhouGame.canvas);
    }
}

/**
 * Start the game
 */
function startGame() {
    checkCanvas();
}
