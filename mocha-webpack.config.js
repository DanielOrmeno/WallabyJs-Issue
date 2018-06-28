// tslint:disable
module.exports = {
    output: {
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    },
    module: {
        rules: [
            {
                test: /\.js$|\.vue$/,
                use: {
                    loader: "istanbul-instrumenter-loader",
                    options: { esModules: true }
                },
                enforce: "post",
                exclude: /node_modules|\.spec\.js$/
            },
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/,
                options: {
                    optimizeSSR: false,
                    loaders: {
                        scss: ["vue-style-loader", "css-loader"]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    externals: [require("webpack-node-externals")()], // in order to ignore all modules in node_modules folder
    devtool: "inline-cheap-module-source-map",
    target: "node", // webpack should compile node compatible code
};
