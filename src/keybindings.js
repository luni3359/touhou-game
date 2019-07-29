export class ControllerEngine {
    constructor() {
        this.controllers = [];
        this.keys = [];

        document.addEventListener("keydown", key => {
            this.keys[key.keyCode] = true;
        });

        document.addEventListener("keyup", key => {
            this.keys[key.keyCode] = false;
        });
    }

    /**
     *
     * @param {String} identifier
     * @param {String} type
     */
    addController(identifier, type) {
        this.controllers.push(
            new Controller(identifier)
        );

        if (type) {
            this.setControllerType(identifier, type);
        }
    }

    setControllerType(identifier, type) {
        for (let i = 0; i < this.controllers.length; i++) {
            let controller = this.controllers[i];

            if (controller.identifier === identifier) {
                controller.setType(type);
                break;
            }
        }
    }
}

class Controller {
    /**
     *
     * @param {String} identifier
     */
    constructor(identifier) {
        this.identifier = identifier;
        this.type = "";
        this.action = {
            left: 0,
            up: 0,
            right: 0,
            down: 0,
            focus: 0,
            fire: 0,
            bomb: 0,
            menu: 0
        };
    }

    /**
     *
     * @param {String} type
     */
    setType(type) {
        switch (type) {
            case "keyboard":
                this.action.left = 37;
                this.action.up = 38;
                this.action.right = 39;
                this.action.down = 40;
                this.action.focus = 16;
                this.action.fire = 90;
                this.action.bomb = 88;
                this.action.menu = 27;
                break;
            default:
                this.type = "";
                throw new Error(`Controller needs a type ("${this.type}" is not a type).`);
        }
    }
}
