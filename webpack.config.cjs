const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log('isProduction: ', isProduction);
  return {
    mode: isProduction ? 'production' : 'development',
    optimization: {
      minimize: false, //if you leave this out webpack strips out code...
      usedExports: false,
      sideEffects: true,
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      compress: false,
      port: 9000,
    },
    entry: {
      index: isProduction
        ? path.resolve(__dirname, 'src', 'index.production.js')
        : path.resolve(__dirname, 'src', 'index.development.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'template.html'),
        filename: path.resolve(__dirname, 'dist', 'index.html'),
      }),
    ],
  };
};
