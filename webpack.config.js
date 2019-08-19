const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        path: path.resolve(__dirname, "demo", "js"),
        filename: "danmaku.js",
        globalObject: "this",
        library: "danmaku",
        libraryTarget: "var"
    }
};
