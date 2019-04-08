import path from 'path';


export default {
    devtool:'inline-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
      },
    entry: [
        path.resolve(__dirname, 'src/index')
      ],
    target:'web',
    output:{
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: {
				loader: 'babel-loader',
			}},
            {test: /\.css$/, loaders: ['style-loader','css-loader']}
        ]
    }
}