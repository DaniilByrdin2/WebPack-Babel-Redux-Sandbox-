
module.exports = {
    mode: "development",

    output: {
        filename: 'webPack-Test/webPack-Test.js',
    },
    
    module: {
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

        ]
    }
}