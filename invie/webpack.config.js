const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    var plugins = [
        new MiniCssExtractPlugin({
            filename: "./css/[name].[fullhash].css",
            chunkFilename: "[id].[fullhash].css"
        })
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin()
        );
    }

    // Try the environment variable, otherwise use root
    const ASSET_PATH = process.env.ASSET_PATH || '/';

    return {
        mode: 'production',
        entry: {
            home: path.resolve(__dirname, 'src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[fullhash].js',
            chunkFilename: 'js/[id].[chunkhash].js',
            publicPath: ASSET_PATH,
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|woff|eot|ttf|svg|otf)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,//limite de peso del archivo. BITS 
                            fallback: 'file-loader',
                            name: 'images/[name].[ext]'
                        }
                    }
                },
            ]
        },
        devServer: {
            //contentBase: './dist',
            port: 8080,
            publicPath: '/'
        },
        plugins
    }
}