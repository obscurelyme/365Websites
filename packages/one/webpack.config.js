const base = require('../../webpack.base.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const _base = base(env, { title: 'One' });
  return {
    ..._base,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.production ? 'app-[contenthash].js' : '[name].js',
      publicPath: '/',
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
  };
};
