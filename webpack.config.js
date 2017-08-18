const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[hash].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_moudles'),
        include: path.resolve(__dirname, 'src'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loaders: [
          'url-loader?limit=20000&name=[name]-[hash:5].[ext]'
        ]
      }
    ]
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
