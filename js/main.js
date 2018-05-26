var canvas, ctx;

var boxes = [];

function update() {
    for (let i = boxes.length; i > 0; i--) {
        let box = boxes[i - 1];
        box.update();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = boxes.length; i > 0; i--) {
        let box = boxes[i - 1];
        box.draw();
    }
}

function run() {
    update();
    draw();
}

function main() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    for (let i = 0; i < 100; i++) {
        let box = new BoxClass();
        box.setPosition(canvas.width * Math.random(), canvas.height * Math.random());
        box.setDimension(5, 5);
        box.setVelocity(2, 2);
        boxes.push(box);
    }

    setInterval(run, 1000 / 60);
}

window.addEventListener("load", main);

// Esq. Ricardo Flores Magón con Ignacio de la Llave
