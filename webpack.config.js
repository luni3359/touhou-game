const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "app.js"),
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
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
