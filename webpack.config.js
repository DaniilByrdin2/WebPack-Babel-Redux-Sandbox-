

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

    output: {
        filename: 'webPack-Test/webPack-Test.js',
    },
    
    module: {
        // loaders
        rules: [
            // loading babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ { loader: "babel-loader" } ]
            },
            // loading img
            {
                test: /\.(png|jpg|gif|ico|jpeg)$/,
                use: [
                    { 
                        loader: "file-loader",
                        options: {
                            name: '[name]-[sha1:hash:7].[ext]', 
                            outputPath: "images",

                        }
                    }
                ]
            },
            // loading fonts
            {
                test: /\.(ttf|otf|cot|waff)$/,
                use: [
                    { 
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]', 
                            outputPath: "fonts",

                        }
                    }
                ]
            },
            // css
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: "css-loader" },
                ]
            },

            // sass/scss
            {
                test: /\.(s[ca]ss)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: 'sass-loader' },
                ]
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Hellow world!',
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        } )
    ]
}