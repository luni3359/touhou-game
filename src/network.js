function loadJson(url) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("load", function () {
            resolve(JSON.parse(this.responseText));
        });
        xhttp.addEventListener("error", function () {
            reject();
        })
        xhttp.open("GET", url);
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhttp.send();
    });
}

/**
 * Standard image load using a Promise
 * @param {String} url
 */
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener("load", () => {
            // If it loads resolve the element
            resolve(img);
        });
        img.addEventListener("error", () => {
            // If it fails send back the url
            reject(url);
        });
        img.src = url;
    });
}

/**
 * Preloads a set of mirrors and returns only the fastest to load
 * @param {Array} array
 * @param {String} type
 */
function preloadArrayOfMirrors(array, type) {
    switch (type) {
        case "img":
        case "image":
            return Promise.race(preloadArray(array, loadImage));
        default:
            throw new Error("Missing load type in preload function call.");
    }
}

/**
 * Generic function wrapper for preloadArrayOfMirrors
 * @param {Array} array
 * @param {Function} fn
 */
function preloadArray(array, fn) {
    const mirrors = [];
    array.map(url => {
        mirrors.push(fn(url));
    });

    return mirrors;
}

module.exports = {

};
