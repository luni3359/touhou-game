"use strict";
class GameInstance {
    /**
     * Creates a Touhou game manager
     */
    constructor() {
        // Meta
        this.name = "touhou";
        this.readyToStart = null; // a Promise

        // Display
        this.resolution = { w: 640, h: 480 };
        this.canvas = this.makeCanvas();
        this.ctx = this.canvas.getContext("2d");

        // dummy var
        this.menusprite = null;

        // Start loading pictures
        this.preloadResources();
    }

    /**
    * Checks whether or not the canvas exists and, if it isn't
    * then create it.
    */
    makeCanvas() {
        var canvas = document.querySelector("canvas.danmaku");

        if (!canvas) {
            // Make canvas element
            canvas = document.createElement("canvas");
            canvas.id = this.name;
            canvas.classList.add("danmaku");
            canvas.width = this.resolution.w;
            canvas.height = this.resolution.h;
        }

        return canvas;
    }

    /**
     * To minimize delays start preloading as soon as possible
     */
    preloadResources() {
        let completedSprites = [];

        for (let sprite in sprites) {
            // Make sure the property is part of the object and not from t
            // prototype chain
            if (sprites.hasOwnProperty(sprite)) {
                completedSprites.push(preloadArrayOfMirrors(sprites[sprite], "img"));
            }
        }

        Promise.all(completedSprites)
            .then(([menu]) => {
                this.menusprite = menu;
            }).catch(reason => {
                throw new Error(reason);
            });
    }

    /**
     * Initializes a new game
     */
    start() {
        // Add canvas to DOM as soon as it's ready
        this.ctx.drawImage(this.menusprite, 596, 3041, this.resolution.w, this.resolution.h, 0, 0, this.canvas.width, this.canvas.height, );
        document.body.appendChild(this.canvas);
    }
}

const touhouGame = new GameInstance();
