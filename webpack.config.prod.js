import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    devtool:'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
      },
    entry: [
        path.resolve(__dirname, 'src/index')
      ],
    target:'web',
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            inject:true
        }),
        new ExtractTextPlugin('[name].[contenthash].css')

    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: {
				loader: 'babel-loader',
			}},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
}