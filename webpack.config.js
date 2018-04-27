const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir);

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/lupus-slider.vue',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
