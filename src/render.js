import { Dimension2D } from "./abstract/screen";

class Compositor {

}

class Layer {

}

class Canvas {
    constructor(canvas) {
        this._element = null;
        this._size = new Dimension2D();
        this.ctx = null;

        if (canvas) {
            this.setCanvas(canvas);
        }
    }
    setCanvas(canvas) {
        if (!canvas || canvas.nodeName !== "CANVAS") {
            throw new Error("Need a canvas to use!");
        }
        this._element = canvas;
        this._size = new Dimension2D(this._element.width, this._element.height);
        this.ctx = this._element.getContext("2d");

        // force width and height to be set on the element
        this._element.width = this._size.w;
        this._element.height = this._size.h;
    }
    clearCanvas() {
        if (!this._element) {
            throw new Error("Need a canvas to use!");
        }

        this.ctx.clearRect(0, 0, this._size.w, this._size.h);
    }
}

export { Compositor, Layer, Canvas };
