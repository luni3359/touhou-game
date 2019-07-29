import { Dimension2D } from "./lib/dim";

export class GameCanvas {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("danmaku");
        this.ctx = this.canvas.getContext("2d");
        this.resolution = new Dimension2D();
        this.pixelDensity = 0;

        this.setResolution(640, 480); // Default Touhou resolution in EoSD
        this.setPixelDensity(1);
    }

    /**
     * 
     * @param {Number} w 
     * @param {Number} h 
     */
    setResolution(w, h) {
        this.resolution = new Dimension2D(w, h);
        this.canvas.width = this.resolution.w;
        this.canvas.height = this.resolution.h;
    }

    /**
     * 
     * @param {Number} x 
     */
    setPixelDensity(x) {
        this.pixelDensity = x;
        this.canvas.style.width = this.resolution.w * this.pixelDensity;
        this.canvas.style.height = this.resolution.h * this.pixelDensity;
    }
}
