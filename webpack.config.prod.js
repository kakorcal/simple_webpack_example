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

// use npm run build for production

// built-in node module which gives helpers methods concerning url paths
const path = require('path');
// we need to require webpack in order to use its plugins
const webpack = require('webpack');
// generates a html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
eval(require('locus'));
module.exports = {
  // helps to debug code in the browser console by displaying pre-processed code.
  devtool: 'source-map',
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
  // list of plugins to use. to view entire list,
  // go to https://webpack.github.io/docs/list-of-plugins.html
  plugins: [
    // minify js code
    new webpack.optimize.UglifyJsPlugin(),
    // counts how many times a module is used. 
    // optimizes its usage depending on its count.
    new webpack.optimize.OccurrenceOrderPlugin(),
    // generates an index.html file inside your dist directory
    // using ./src/index.html as a template. you don't need to include
    // bundle.js in the html file as the plugin will automatically do that.
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    // a list of stuff you want to modularize (ie. using require, import, export)
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};