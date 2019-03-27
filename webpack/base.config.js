module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index',
  ],
  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
    ],
  },
}
