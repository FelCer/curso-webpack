const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].[chunkhash].js'
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
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 255000,//limite de peso del archivo. BITS 
                        fallback: 'file-loader',
                        name: 'images/[name].[chunkhash].[ext]'
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
}