const webpack = require("webpack");
const dotenv = require("dotenv");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = () => {
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[next] = JSON.stringify(env[next]);
        return prev;
    }, {});
    return {
        mode: "development",
        devServer: {
            historyApiFallback: true
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
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|jp?g|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "images/",
                                publicPath: "images/"
                            }
                        }
                    ]
                }
            ]
        },
       
        plugins: [
            htmlPlugin,
            new webpack.DefinePlugin({
                process: { env: envKeys }
            }),
          
        ]
    };
};
