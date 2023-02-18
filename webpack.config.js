const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    optimization: {
      minimize: false,
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
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
        {
          test: /\.css$/, // process .css files
          use: [
            'style-loader', // generate the necessary code to apply styles to components
            'css-loader', // parse the CSS code
            'postcss-loader',
          ],
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
