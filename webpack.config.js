module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    }
};
