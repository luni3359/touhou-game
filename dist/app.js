var BulletGame =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/engine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: GameCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameCanvas\", function() { return GameCanvas; });\n/* harmony import */ var _lib_dim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dim */ \"./src/lib/dim.js\");\n\n\nclass GameCanvas {\n    constructor() {\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.classList.add(\"danmaku\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.resolution = new _lib_dim__WEBPACK_IMPORTED_MODULE_0__[\"Dimension2D\"]();\n        this.pixelDensity = 0;\n\n        this.setResolution(640, 480); // Default Touhou resolution in EoSD\n        this.setPixelDensity(1);\n    }\n\n    /**\n     * \n     * @param {Number} w \n     * @param {Number} h \n     */\n    setResolution(w, h) {\n        this.resolution = new _lib_dim__WEBPACK_IMPORTED_MODULE_0__[\"Dimension2D\"](w, h);\n        this.canvas.width = this.resolution.w;\n        this.canvas.height = this.resolution.h;\n    }\n\n    /**\n     * \n     * @param {Number} x \n     */\n    setPixelDensity(x) {\n        this.pixelDensity = x;\n        this.canvas.style.width = this.resolution.w * this.pixelDensity;\n        this.canvas.style.height = this.resolution.h * this.pixelDensity;\n    }\n}\n\n\n//# sourceURL=webpack://BulletGame/./src/canvas.js?");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: BulletGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulletGame\", function() { return BulletGame; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _keybindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keybindings */ \"./src/keybindings.js\");\n/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow */ \"./src/flow.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ \"./src/scene.js\");\n/* harmony import */ var _lib_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/network */ \"./src/lib/network.js\");\n\n\n\n\n\n\nclass BulletGame {\n    constructor() {\n        this.screen = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"GameCanvas\"]();\n        this.keybindings = new _keybindings__WEBPACK_IMPORTED_MODULE_1__[\"ControllerEngine\"]();\n        this.keybindings.addController(\"player1\", \"keyboard\");\n        this.instance = new _flow__WEBPACK_IMPORTED_MODULE_2__[\"GameFlow\"](this.screen);\n        this.resources = null;\n        this.instance.setScene(new _scene__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]().setBackgroundImage(\"main-menu\"));\n    }\n\n    /**\n     * Starts a session.\n     */\n    start() {\n        this.instance.start();\n    }\n\n    setResourcesFile(path) {\n        return new Promise((resolve, reject) => {\n            _lib_network__WEBPACK_IMPORTED_MODULE_4__[\"Network\"].loadJson(path).then(data => {\n                let completedSprites = [];\n                resources = data;\n\n                for (let spritesheet in resources.sprites) {\n\n                    // Make sure the property is part of the object and not from t\n                    // prototype chain\n                    if (resources.sprites.hasOwnProperty(spritesheet)) {\n                        // Urls to load per spritesheet\n                        const candidateUrls = resources.sprites[spritesheet].sources.mirrors.slice();\n                        candidateUrls.unshift(resources.sprites[spritesheet].sources.local);\n\n                        completedSprites.push(_lib_network__WEBPACK_IMPORTED_MODULE_4__[\"Network\"].preloadArrayOfMirrors(candidateUrls, \"img\"));\n                    }\n                }\n\n                Promise.all(completedSprites).then(images => {\n                    this.menusprite = images[1];\n                    resolve();\n                }).catch(reason => {\n                    reject(reason);\n                });\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://BulletGame/./src/engine.js?");

/***/ }),

/***/ "./src/flow.js":
/*!*********************!*\
  !*** ./src/flow.js ***!
  \*********************/
/*! exports provided: GameFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameFlow\", function() { return GameFlow; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n\n\nclass GameFlow {\n    /**\n     *\n     * @param {GameCanvas} screen\n     */\n    constructor(screen) {\n        this.running = false;\n        this.instance = null;\n        this.lastTick = performance.now();\n        this.ctx = screen.ctx;\n        this.canvas = screen.canvas;\n        this.scene = null;\n    }\n\n    setScene(scene) {\n        this.scene = scene;\n    }\n\n    run() {\n        let now = performance.now();\n        let dt = (now - this.lastTick) / 1000;\n        this.lastTick = now;\n\n        // console.log(dt);\n\n        if (this.running) {\n            this.update(dt);\n            this.draw(this.ctx, dt);\n        }\n    }\n\n    update(dt) {\n        this.scene.update();\n    }\n\n    draw(ctx, dt) {\n        this.scene.draw(ctx, dt);\n    }\n\n    start() {\n        this.instance = setInterval(() => {\n            this.run(performance.now());\n        }, 1000 / 60);\n        this.resume();\n    }\n\n    resume() {\n        this.running = true;\n    }\n\n    pause() {\n        this.running = false;\n    }\n\n    stop() {\n        clearInterval(this.instance);\n        this.pause();\n    }\n}\n\n\n//# sourceURL=webpack://BulletGame/./src/flow.js?");

/***/ }),

/***/ "./src/keybindings.js":
/*!****************************!*\
  !*** ./src/keybindings.js ***!
  \****************************/
/*! exports provided: ControllerEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControllerEngine\", function() { return ControllerEngine; });\nclass ControllerEngine {\n    constructor() {\n        this.controllers = [];\n        this.keys = [];\n\n        document.addEventListener(\"keydown\", key => {\n            this.keys[key.keyCode] = true;\n        });\n\n        document.addEventListener(\"keyup\", key => {\n            this.keys[key.keyCode] = false;\n        });\n    }\n\n    /**\n     *\n     * @param {String} identifier\n     * @param {String} type\n     */\n    addController(identifier, type) {\n        this.controllers.push(\n            new Controller(identifier)\n        );\n\n        if (type) {\n            this.setControllerType(identifier, type);\n        }\n    }\n\n    setControllerType(identifier, type) {\n        for (let i = 0; i < this.controllers.length; i++) {\n            let controller = this.controllers[i];\n\n            if (controller.identifier === identifier) {\n                controller.setType(type);\n                break;\n            }\n        }\n    }\n}\n\nclass Controller {\n    /**\n     *\n     * @param {String} identifier\n     */\n    constructor(identifier) {\n        this.identifier = identifier;\n        this.type = \"\";\n        this.action = {\n            left: 0,\n            up: 0,\n            right: 0,\n            down: 0,\n            focus: 0,\n            fire: 0,\n            bomb: 0,\n            menu: 0\n        };\n    }\n\n    /**\n     *\n     * @param {String} type\n     */\n    setType(type) {\n        switch (type) {\n            case \"keyboard\":\n                this.action.left = 37;\n                this.action.up = 38;\n                this.action.right = 39;\n                this.action.down = 40;\n                this.action.focus = 16;\n                this.action.fire = 90;\n                this.action.bomb = 88;\n                this.action.menu = 27;\n                break;\n            default:\n                this.type = \"\";\n                throw new Error(`Controller needs a type (\"${this.type}\" is not a type).`);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://BulletGame/./src/keybindings.js?");

/***/ }),

/***/ "./src/lib/dim.js":
/*!************************!*\
  !*** ./src/lib/dim.js ***!
  \************************/
/*! exports provided: Dimension2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dimension2D\", function() { return Dimension2D; });\nclass Dimension2D {\n    /**\n     * \n     * @param {Number} w \n     * @param {Number} h \n     */\n    constructor(w, h) {\n        this.w = w || 0;\n        this.h = h || 0;\n    }\n}\n\n\n//# sourceURL=webpack://BulletGame/./src/lib/dim.js?");

/***/ }),

/***/ "./src/lib/network.js":
/*!****************************!*\
  !*** ./src/lib/network.js ***!
  \****************************/
/*! exports provided: Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Network\", function() { return Network; });\nclass Network {\n    static loadJson(url) {\n        return new Promise((resolve, reject) => {\n            const xhttp = new XMLHttpRequest();\n            xhttp.addEventListener(\"load\", function () {\n                resolve(JSON.parse(this.responseText));\n            });\n            xhttp.addEventListener(\"error\", function () {\n                reject();\n            })\n            xhttp.open(\"GET\", url);\n            xhttp.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");\n            xhttp.send();\n        });\n    }\n\n    /**\n     * Standard image load using a Promise\n     * @param {String} url\n     */\n    static loadImage(url) {\n        return new Promise((resolve, reject) => {\n            const img = new Image();\n            img.addEventListener(\"load\", () => {\n                // If it loads resolve the element\n                resolve(img);\n            });\n            img.addEventListener(\"error\", () => {\n                // If it fails send back the url\n                reject(url);\n            });\n            img.src = url;\n        });\n    }\n\n    /**\n     * Preloads a set of mirrors and returns only the fastest to load\n     * @param {Array} array\n     * @param {String} type\n     */\n    static preloadArrayOfMirrors(array, type) {\n        switch (type) {\n            case \"img\":\n            case \"image\":\n                return Promise.race(preloadArray(array, loadImage));\n            default:\n                throw new Error(\"Missing load type in preload function call.\");\n        }\n    }\n\n    /**\n     * Generic function wrapper for preloadArrayOfMirrors\n     * @param {Array} array\n     * @param {Function} fn\n     */\n    static preloadArray(array, fn) {\n        const mirrors = [];\n        array.map(url => {\n            mirrors.push(fn(url));\n        });\n\n        return mirrors;\n    }\n}\n\n//# sourceURL=webpack://BulletGame/./src/lib/network.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\nclass Scene {\n    constructor() {\n        this.name = \"Unnamed\";\n        this.nextScene = null;\n        this.transitionWith = \"fade\"\n        this.backgroundColor = \"#000\";\n        this.backgroundImage = \"\";\n    }\n\n    setNextScene(scene) {\n        this.nextScene = scene;\n    }\n\n    getNextScene() {\n        return this.nextScene;\n    }\n\n    setBackgroundColor(color) {\n        this.backgroundColor = color;\n    }\n\n    setBackgroundImage(imageUrl) {\n        this.backgroundImage = imageUrl;\n    }\n\n    update(dt) {\n        console.log(dt);\n    }\n\n    draw(ctx, dt) {\n\n    }\n}\n\n//# sourceURL=webpack://BulletGame/./src/scene.js?");

/***/ })

/******/ });