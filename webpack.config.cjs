const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const settings = {
    cjs: {
      output: {
        filename: '[name].cjs',
        library: {
          type: 'commonjs',
        },
      },
      babelpresetenv: {
        modules: 'commonjs',
        bugfixes: true,
        loose: true,
        targets: {
          node: 'current',
        },
      },
    },
    mjs: {
      experiments: {
        outputModule: true,
      },
      output: {
        filename: '[name].mjs',
        library: {
          type: 'module',
        },
      },
      babelpresetenv: {
        modules: false,
        bugfixes: true,
        loose: true,
        targets: {
          esmodules: true,
        },
      },
    },
  };

  const outputFormat =
    process.argv.includes('--name') &&
    process.argv[process.argv.indexOf('--name') + 1]; //gives mjs or cjs
  console.log('isProduction:', isProduction);
  console.log('outputFormat:', outputFormat);

  console.log('experiments:', settings[outputFormat].experiments);
  console.log('output:', settings[outputFormat].output);
  console.log('babelpresetenv:', settings[outputFormat].babelpresetenv);

  return {
    optimization: {
      minimize: false,
      usedExports: false,
      sideEffects: false,
      moduleIds: 'named',
      mangleExports: false,
      removeEmptyChunks: false,
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
    experiments: settings[outputFormat].experiments,

    output: {
      path: path.resolve(__dirname, 'dist'),
      scriptType: 'text/javascript',
      ...settings[outputFormat].output,
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
              presets: [
                ['@babel/preset-env', settings[outputFormat].babelpresetenv],
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        template: path.resolve(__dirname, 'src', 'template.html'),
      }),
    ],
  };
};
