/* webpack.config.js */
const path = require('path');

module.exports = {
  entry: './basic.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};