import { Dimension2D } from "./dim";

export class GameCanvas {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("danmaku");
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
    }
}
