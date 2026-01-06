const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json'],
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
        }]
    }
}
