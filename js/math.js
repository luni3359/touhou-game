class Vector2D {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    divideByNumber(number) {
        return new Vector2D(this.x / number, this.y / number);
    }

    divideByVector(vector) {
        return new Vector2D(this.x / vector.x, this.y / vector.y);
    }

    multiplyByNumber(number) {
        return new Vector2D(this.x * number, this.y * number);
    }

    multiplyByVector(vector) {
        return new Vector2D(this.x * vector.x, this.y * vector.y);
    }

    unit() {
        return this.divideByNumber(this.magnitude());
    }
}
