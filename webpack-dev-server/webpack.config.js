const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 9000
    },
    module: {
        rules: [
            // Se cargan los loaders
            {
                // test: Tipo de archivo a reconocer.
                // use: Que loader se va encargar del archivo.
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}