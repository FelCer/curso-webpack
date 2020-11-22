const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, './src/js/index.js'),
        about: path.resolve(__dirname, './src/js/contact.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            },
            // Se cargan los loaders
            {
                // test: Tipo de archivo a reconocer.
                // use: Que loader se va encargar del archivo.
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    "postcss-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 255000//limite de peso del archivo. BITS 
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        name: 'video/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.json$/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                //test: que tipo de archivo quiero reconocer
                //user: que loader se va a encargar del archivo
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            use: [
                                require('nib'),
                                require('rupture')
                            ],
                            import: [
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        noIeCompant: true, //Compatible solo con navegadores nuevos.
                    }
                }]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    }
}