export class Scene {
    constructor() {
        this.name = "Unnamed";
        this.nextScene = null;
        this.transitionWith = "fade"
        this.backgroundColor = "#000";
        this.backgroundImage = "";
    }

    setNextScene(scene) {
        this.nextScene = scene;
    }

    getNextScene() {
        return this.nextScene;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    setBackgroundImage(imageUrl) {
        this.backgroundImage = imageUrl;
    }

    update(dt) {
        console.log(dt);
    }

    draw(ctx, dt) {

    }
}