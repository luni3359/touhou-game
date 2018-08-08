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

class CircleCollision extends Entity {
    constructor(rad) {
        super();
        this.radius = rad;
    }
}

class Bullet extends CircleCollision {
    constructor() {
        super();
    }
}

class Player extends CircleCollision {
    constructor() {
        super();
    }
}
