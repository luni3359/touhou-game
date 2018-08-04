class Vector2D {
    /**
     * Create Vector2D
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    /**
     * Get a normalized vector
     */
    unit() {
        return this.divideByNumber(this.magnitude());
    }

    /**
     * Returns the length of the vector
     */
    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    /**
     *  Adds a vector to this vector
     * @param {Vector2D} vector
     */
    addVector(vector) {
        return new Vector2D(this.x + vector.x, thix.y + vector.y);
    }

    /**
     * Substracts a vector from this vector
     * @param {Vector2D} vector
     */
    substractVector(vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    /**
     * Multiply this vector by number
     * @param {Number} number
     */
    multiplyByNumber(number) {
        return new Vector2D(this.x * number, this.y * number);
    }

    /**
     * Multiply this vector by vector
     * @param {Vector2D} vector
     */
    multiplyByVector(vector) {
        return new Vector2D(this.x * vector.x, this.y * vector.y);
    }

    /**
     * Divide this vector by number
     * @param {Number} number
     */
    divideByNumber(number) {
        return new Vector2D(this.x / number, this.y / number);
    }

    /**
     * Divide this vector by vector
     * @param {Vector2D} vector
     */
    divideByVector(vector) {
        return new Vector2D(this.x / vector.x, this.y / vector.y);
    }
}
