import { GameCanvas } from "./canvas";

export class GameFlow {
    /**
     *
     * @param {GameCanvas} screen
     */
    constructor(screen) {
        this.running = false;
        this.instance = null;
        this.lastTick = performance.now();
        this.ctx = screen.ctx;
        this.canvas = screen.canvas;
        this.scene = null;
    }

    setScene(scene) {
        this.scene = scene;
    }

    run() {
        let now = performance.now();
        let dt = (now - this.lastTick) / 1000;
        this.lastTick = now;

        // console.log(dt);

        if (this.running) {
            this.update(dt);
            this.draw(this.ctx, dt);
        }
    }

    update(dt) {
        this.scene.update();
    }

    draw(ctx, dt) {
        this.scene.draw(ctx, dt);
    }

    start() {
        this.instance = setInterval(() => {
            this.run(performance.now());
        }, 1000 / 60);
        this.resume();
    }

    resume() {
        this.running = true;
    }

    pause() {
        this.running = false;
    }

    stop() {
        clearInterval(this.instance);
        this.pause();
    }
}
