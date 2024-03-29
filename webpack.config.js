var cssLoader = {
  loader: "css-loader",
  query: { modules: true, localIdentName: '[name]_[local]___[hash:base64:5]' }
};

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias : {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: ["style-loader", cssLoader, "sass-loader"] }
    ]
  }
};

