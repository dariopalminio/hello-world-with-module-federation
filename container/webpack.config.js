const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      library: { type: 'var', name: 'container' },
      filename: 'container.js',
      remotes: {
        //name: '<name>@http://localhost:port/<filename>',
        app1: 'app1', //"http://localhost:3001/app1.js"
        app2: 'app2',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
