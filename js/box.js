function BoxClass() {
    this.velocity = new Vector2D();
    this.position = new Vector2D();
    this.dimension = new Dimension();
    this.sprite = new Sprite();
    this.color = "black";

    this.canCollide = true;
}

BoxClass.prototype.update = function () {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x + this.dimension.w > canvas.width) {
        this.position.x = canvas.width - this.dimension.w;
        this.velocity.x *= -1;
    }

    if (this.position.x < 0) {
        this.position.x = 0;
        this.velocity.x *= -1;
    }

    if (this.position.y + this.dimension.w > canvas.height) {
        this.position.y = canvas.height - this.dimension.h;
        this.velocity.y *= -1;
    }

    if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y *= -1;
    }
};

BoxClass.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.dimension.w, this.dimension.h);
};

BoxClass.prototype.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
};

BoxClass.prototype.setDimension = function (w, h) {
    this.dimension.w = w;
    this.dimension.h = h;
};

BoxClass.prototype.setVelocity = function (x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
};
