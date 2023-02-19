const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',

    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: false,
      port: 9000,
    },
    entry: isProduction
      ? './src/index.production.js'
      : './src/index.development.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: 'Icon',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // specify react preset
            },
          },
        },
        // {
        //   test: /\.css$/, // process .css files
        //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        // },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
        inject: true,
      }),
    ],
    optimization: {
      minimize: false,
    },
  };
};
