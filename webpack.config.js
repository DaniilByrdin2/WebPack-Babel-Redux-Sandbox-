
const MiniCssExtractPlugin  = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = ( env = {} ) => {

    const { MODE = 'development' } = env
    
    const isProd = MODE === 'production'
    const isDev = MODE === 'development'
    
    console.log( env );
    console.log( MODE );

    const getStyleLoader = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin( {
                title: 'Hellow world!',
                buildTime: new Date().toISOString(),
                template: 'public/index.html'
            } )
        ]

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css'
                })
            )
        }

        return plugins
    }

    return {
        mode: isProd ? 'production': isDev && 'development', // production
    
        output: {
            filename: isProd ? 'main.js' : undefined,
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
                    use: getStyleLoader()
                },
    
                // sass/scss
                {
                    test: /\.(s[ca]ss)$/,
                    use: [
                        ...getStyleLoader(),
                        { loader: 'sass-loader' },
                    ]
                },
    
            ]
        },
    
        plugins: getPlugins(),
    
        devServer: {
            open: true
        }
    }
}