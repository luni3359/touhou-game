class Vector2 {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    unit() {
        return this.divideByScalar(this.magnitude());
    }
    magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    multiplyByScalar(n) {
        return new Vector2(this.x * n, this.y * n);
    }
    multiplyByVector(v) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }
    divideByScalar(n) {
        return new Vector2(this.x / n, this.y / n);
    }
    divideByVector(v) {
        return new Vector2(this.x / v.x, this.y / v.y);
    }
}

export { Vector2 };
