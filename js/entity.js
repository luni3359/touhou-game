class Entity {
    constructor() {
        this.position = new Vector2D();
    }
    update() {
        throw new Error("Unimplemented update method.");
    }
    draw() {
        throw new Error("Unimplemented draw method.");
    }
}

class Bullet extends Entity {
    constructor() {
        super();
    }
}

class Player extends Entity {
    constructor() {
        super();
    }
}
