const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        filename: "devBundle.js",
    },

    entry: './src/index.tsx',


    module: {
        // loaders
        rules: [
            // ESLint 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                },
            },
            // TS
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // loading babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader" }]
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
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },

                ]
            },

            // sass/scss
            {
                test: /\.(s[ca]ss)$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
        ],

    },

    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Hellow world!',
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        } ),
        new ESLintPlugin()
    ],


    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        open: true,
        hot: true,
    }
}