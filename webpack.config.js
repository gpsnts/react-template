const HtmlWebPackPlugin = require("html-webpack-plugin"),
      path              = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 1337,
  },

  entry: path.join(__dirname, 'public', 'index.js'),
  
  output: {
    publicPath: "/",
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {  
            cacheDirectory: true  
          } 
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ],
      },
      {  
        test: /\.(scss|sass)$/,  
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader',
        ],  
      }
      // CSS ONLY
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'style-loader', 
      //     'css-loader'
      //   ],
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: './index.html'
    })
  ]
};