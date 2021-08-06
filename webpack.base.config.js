const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? false : 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: argv.title,
      }),
    ],
    devServer: {
      port: 8080,
      compress: true,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      open: true,
      https: true,
    },
  };
};
