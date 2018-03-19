module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          query: {
            modules: true,
            localIdentName: '[name]_[local]___[hash:base64:5]'
          }
        },
        {
          loader: "sass-loader"
        }
      ]
    }]
  }
};

