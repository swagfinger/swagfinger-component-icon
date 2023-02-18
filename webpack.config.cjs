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
    target: 'web',
    entry: isProduction
      ? './src/index.production.js'
      : './src/index.development.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: 'Icon',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },

    resolve: {
      extensions: ['.js', 'jsx', '.mjs'], // tell webpack to resolve .mjs files as ES modules
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',

            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // specify react preset
            },
          },
          resolve: {
            fullySpecified: false,
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
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
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
