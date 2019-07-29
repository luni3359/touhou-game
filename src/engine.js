import { GameCanvas } from "./canvas";
import { ControllerEngine } from "./keybindings";
import { GameFlow } from "./flow";
import { Scene } from "./scene";
import { Network } from "./lib/network"

export class BulletGame {
    constructor() {
        this.screen = new GameCanvas();
        this.keybindings = new ControllerEngine();
        this.keybindings.addController("player1", "keyboard");
        this.instance = new GameFlow(this.screen);
        this.resources = null;
        this.instance.setScene(new Scene().setBackgroundImage("main-menu"));
    }

    /**
     * Starts a session.
     */
    start() {
        this.instance.start();
    }

    setResourcesFile(path) {
        return new Promise((resolve, reject) => {
            Network.loadJson(path).then(data => {
                let completedSprites = [];
                resources = data;

                for (let spritesheet in resources.sprites) {

                    // Make sure the property is part of the object and not from t
                    // prototype chain
                    if (resources.sprites.hasOwnProperty(spritesheet)) {
                        // Urls to load per spritesheet
                        const candidateUrls = resources.sprites[spritesheet].sources.mirrors.slice();
                        candidateUrls.unshift(resources.sprites[spritesheet].sources.local);

                        completedSprites.push(Network.preloadArrayOfMirrors(candidateUrls, "img"));
                    }
                }

                Promise.all(completedSprites).then(images => {
                    this.menusprite = images[1];
                    resolve();
                }).catch(reason => {
                    reject(reason);
                });
            });
        });
    }
}
