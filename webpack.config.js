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
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  parser: 'postcss-js',
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
                execute: true,
              },
            },
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
