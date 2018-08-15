"use strict";
let resources;

export class GameInstance {
    /**
     * Creates a Touhou game manager
     */
    constructor() {
        // Meta
        this.name = "touhou";
        this.readyToStart = this.preloadResources(); // preload!

        // Display
        this.resolution = { w: 640, h: 480 };
        this.canvas = this.makeCanvas();
        this.ctx = this.canvas.getContext("2d");

        // dummy var
        this.menusprite = null;
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
        return new Promise((resolve, reject) => {
            loadJson("./assets/config/resources.json").then(data => {
                let completedSprites = [];
                resources = data;

                for (let spritesheet in resources.sprites) {

                    // Make sure the property is part of the object and not from t
                    // prototype chain
                    if (resources.sprites.hasOwnProperty(spritesheet)) {
                        // Urls to load per spritesheet
                        const candidateUrls = resources.sprites[spritesheet].sources.mirrors.slice();
                        candidateUrls.unshift(resources.sprites[spritesheet].sources.local);

                        completedSprites.push(preloadArrayOfMirrors(candidateUrls, "img"));
                    }
                }

                Promise.all(completedSprites).then(images => {
                    this.menusprite = images[1];
                    resolve();
                }).catch(reason => {
                    reject(reason);
                });
            });
        });
    }

    update(dt) {

    }

    draw() {

    }

    run(dt) {
        this.update(dt);
        this.draw();
    }

    /**
     * Initializes a new game
     */
    start() {
        document.body.appendChild(this.canvas);

        this.readyToStart.then(() => {
            const loadingScreen = getResourceData(resources.sprites["main-menu"], "loading-screen");
            this.ctx.drawImage(this.menusprite, ...loadingScreen.position, ...loadingScreen.size, 0, 0, this.canvas.width, this.canvas.height, );
        });
    }
}

function getResourceData(namespace, element) {
    return {
        "position": namespace.elements[element].position,
        "size": namespace.elements[element].size
    };
}
