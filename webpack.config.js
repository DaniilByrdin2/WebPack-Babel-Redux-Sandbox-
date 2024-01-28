
const MiniCssExtractPlugin  = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');


module.exports = ( env = {} ) => {

    const { MODE = 'development' } = env
    
    const isProd = MODE === 'production'
    const isDev = MODE === 'development'
    
    console.log( env );
    console.log( MODE );

    const getStyleLoader = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader'
            // 'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin( {
                title: 'Hellow world!',
                buildTime: new Date().toISOString(),
                template: 'public/index.html'
            } ),
            new ESLintPlugin()
        ]

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'bundle-[hash:8].css'
                }),
            )
        }

        return plugins
    }


    return {
        mode: isProd ? 'production' : isDev && 'development', // production

        output: {
            filename: isProd ? 'bundle.js' : undefined,
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
                        ...getStyleLoader(),

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

        plugins: getPlugins(),

        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },

        devServer: {
            open: true,
            hot: true,
        }
    }
}
