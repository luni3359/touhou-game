import { Dimension2D } from "./screen";

class Screen extends Canvas {
    constructor() {
        super();
        this._resolution = new Dimension2D(640, 480);
        this._stretchImage = true;
    }
    setResolution(w, h) {
        this._resolution = new Dimension2D(w, h);
    }
}

export { Screen };
