//***************************************************************************
  // what does this file do?
   /*
    • bundles js files into a single file
    • lets you use files inside node_modules for the front-end
    • loads compliers in order to use stuff like es2015 and sass
    • minifies and optimizes files
    • lets you include any type of file inside your js file 
    • hot module replacement - automatically updates changes in browser without having to refresh the page
   */  
//***************************************************************************

// use npm run build for production

// built-in node module which gives helpers methods concerning url paths
const path = require('path');
// we need to require webpack in order to use its plugins
const webpack = require('webpack');
// generates a html file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // helps to debug code in the browser console by displaying pre-processed code.
  devtool: 'cheap-eval-source-map',
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
    new HtmlWebpackPlugin({template: './src/index.html'}),
    // DefinePlugin lets you create global constants. 
    // useful to discern if you are in development or production
    // https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
    new webpack.DefinePlugin({
      // you need to use JSON.stringify or use '"production"'
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    // a list of stuff you want to modularize (ie. you can include them using require or export using module.exports)
    loaders: [
      {
        // what extensions should be applied with the particular loader
        test: /\.css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // use babel-loader only for files in the src directory
        include: path.join(__dirname, 'src'),
        // loaders accept query parameters. this can be used to pass configuration to the loader.
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};