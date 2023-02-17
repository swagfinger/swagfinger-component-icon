const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    entry: isProduction
      ? './src/index.production.js'
      : './src/index.development.js',
    output: {
      library: 'Icon', // the name of the exported library
      libraryTarget: 'umd', // the format of the exported library
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
        inject: true,
      }),
    ],
  };
};
