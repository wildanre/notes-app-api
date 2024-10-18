const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './script.js',  // Entry point aplikasi kamu
  output: {
    path: path.resolve(__dirname, 'dist'),  // Folder output
    filename: 'bundle.js'  // Nama file bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // File template untuk index.html
      filename: 'index.html'  // Nama file yang akan di-generate di folder dist
    })
  ],
  devServer: {
    contentBase: './dist',  // Folder yang disajikan oleh devServer
    historyApiFallback: true,  // Agar tidak ada error saat refresh halaman
  },
  module: {
    rules: [
      // Loader lain seperti untuk CSS, JS, dll.
    ]
  }
};
