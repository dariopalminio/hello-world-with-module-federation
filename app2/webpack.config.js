const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
const federationConfig = require('./federation.config.json');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3002/',
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
      ...federationConfig,
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'app2.js',
      //exposes: {
        // expose each component
        // './MFE1': './src/MFE1',
       // AppTwo: './src/components/AppTwo',
     // },
     remotes: {
      //name: '<name>@http://localhost:port/<filename>',
      app1: 'app1', //"http://localhost:3001/app1.js"
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