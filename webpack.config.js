const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: './src/index.js',

    output: {
      library: 'Icon', // the name of the exported library
      libraryTarget: 'umd', // the format of the exported library
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      clean: true,
      environment: {
        module: true,
      },
      library: {
        type: 'commonjs', // output as commonjs module
      },
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false, // disable CommonJS output
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.cjs', '.mjs'],
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
