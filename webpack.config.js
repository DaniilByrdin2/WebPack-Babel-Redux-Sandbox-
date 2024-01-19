
module.exports = {
    mode: "development",

    output: {
        filename: 'webPack-Test/webPack-Test.js',
    },
    
    module: {
        rules: [
            {
                test: /\.png$/,
                use: [
                    { 
                        loader: "file-loader",
                        options: {
                            name: '[name]-[sha1:hash:7].[ext]', 
                            outputPath: "images",

                        }
                    }
                ]
            }
        ]
    }
}