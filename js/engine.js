function Vector2D() {
    this.x = 0;
    this.y = 0;
}

function Dimension() {
    this.w = 0;
    this.h = 0;
}

function Sprite() {
    this.position = new Vector2D();
    this.dimension = new Dimension();
    this.url = null;
}
