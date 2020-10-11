const path = require('path');

const rpath = rp => path.resolve(process.cwd(), rp);

module.exports = () => ({
    mode: 'production',
    name: 'dxf-doc',
    entry: {
        browser: rpath('src/index.ts'),
    },
    output: {
        path: rpath('dist'),
        libraryTarget: 'var',
        library: 'DxfDoc',
    },
    module: {
        rules: [
            {
                test: /\.m?[tj]sx?$/,
                loader: 'babel-loader',
                exclude: [
                    rpath('node_modules'),
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.mjs', '.js', '.json'],
    },
    devtool: 'source-map',
});
