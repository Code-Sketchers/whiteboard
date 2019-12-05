module.exports = {
  entry: (__dirname + '/src/index.js'),
  output: {
    path: (__dirname + '/build'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/build/',
    proxy: {'/': 'http://localhost:4000'},
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
    ]
  }
}