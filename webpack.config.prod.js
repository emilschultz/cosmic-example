const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  console.log(env);
  
  return {
    mode: 'production',
    entry: {
      index: './src/index.js'
    },
    devtool: 'source-map',
    plugins: [
      new webpack.EnvironmentPlugin({
        'BUCKET_SLUG': env.BUCKET_SLUG,
        'READ_KEY': env.READ_KEY
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/template.html',
        title: 'Produksjon'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  };
};