const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        filename: 'bundle.js',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}