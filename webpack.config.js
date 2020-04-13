const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../../../',
              name: '[path][name].[ext]?[sha512:hash:base64:7]',
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new CopyPlugin([
      './src/public/**/*.*',
    ]),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: process.env.PORT || 8000,
    progress: true,
  }
})
