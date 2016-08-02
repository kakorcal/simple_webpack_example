//***************************************************************************
  // what does this file do?
   /*
    bundles js files into a single file
    lets you use files inside node_modules for the front-end
    loads compliers in order to use stuff like es2015 and sass
    minifies and optimizes files
    lets you include any type of file inside your js file 
    hot module replacement - automatically updates changes in browser without
    having to refresh the page
   */  
//***************************************************************************

// built-in node module which gives helpers methods concerning url paths
const path = require('path');
// we need to require webpack in order to use its plugins
const webpack = require('webpack');
eval(require('locus'));
module.exports = {
  // what file you want to start the bundling process.
  // you can have multiple entry points 
  entry: ['./src/index'],
  output: {
    // where to place the bundled file.
    // in this case, it will go inside the dist directory
    // the dist directory is the minified version of the src directory
    // and is used in production
    path: path.join(__dirname, 'dist'),
    // name of the bundled file
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};