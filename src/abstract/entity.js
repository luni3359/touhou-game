import { Dimension2D } from "./screen";
import { Vector2 } from "./physics";

class Entity {
    constructor() {
        this._size = new Dimension2D();
        this._position = new Vector2();
    }
    setSize(dim) {
        this._size = dim || new Dimension2D();
    }
    setPosition(pos) {
        this._position = pos || new Vector2();
    }
}

class Projectile extends Entity {
    constructor() {
        super();
    }
}

export { Projectile }
