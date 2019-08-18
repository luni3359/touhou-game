const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "danmaku.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "danmaku.js",
        globalObject: "this",
        library: "danmaku",
        libraryTarget: "var"
    }
};
