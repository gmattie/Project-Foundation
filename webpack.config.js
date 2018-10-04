/**
 * Imports
 * 
 */
const autoprefixer = require("autoprefixer");
const path = require("path");
const webpack = require("webpack");

/**
 * Plugins
 * 
 */
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/**
 * Constants
 * 
 */
const BUILD_DIR = "./resources/build/";
const SOURCE_DIR = "./resources/source/";


/**
 * The Webpack configuration object contains the following keys:
 * 
 *     Entry:  An object that dictates where Webpack enters the application to start building the bundles.
 *     Module:  Options that determine how the different types of modules within a project will be treated.
 *     Optimization:  Executed optimizations when in Production mode.
 *     Plugins:  Customization of the Webpack build process.
 *     Output:  An object that dictates where Webpack will build the bundles.
 * 
 */
const config = {
    entry: {
        index: [
            `${SOURCE_DIR}js/index.js`,
            `${SOURCE_DIR}sass/index.scss`
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new MiniCSSExtractPlugin({
            filename: "../css/[name].css"
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            server: {
                baseDir: [path.resolve(__dirname, BUILD_DIR)]
            }
        })
    ],
    output: {
        path: path.resolve(__dirname, BUILD_DIR, "js"),
        filename: "[name].js"
    }
};

/**
 * Exported function module that returns the Webpack configuration object.  This function is
 * used to alter the configuration object depending on the mode ("development" or "production").
 * In development mode, the following key is added to the Webpack configuration object:
 * 
 *     Devtool:  This option controls how source maps are generated.
 * 
 */
module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.devtool = "inline-source-map";
    }
    
    return config;
};