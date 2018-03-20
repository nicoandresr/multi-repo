var cssLoader = {
  loader: 'css-loader',
  query: { modules: true, localIdentName: '[name]_[local]___[hash:base64:5]' }
};

module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js' },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'buble-loader', options: { objectAssign: 'Object.assign' } },
      { test: /\.scss$/, loaders: ["style-loader", cssLoader, "sass-loader"] }
    ]
  }
}

