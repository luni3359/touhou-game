const path = require("path");

module.exports = {
    mode: "production",
    // mode: "development",
    entry: path.resolve(__dirname, "src", "engine.js"),
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        library: "BulletGame",
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        ]
    }
};
