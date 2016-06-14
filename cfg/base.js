/* eslint strict: 0 */
'use strict'

let path = require('path')
let port = 8000
let srcPath = path.join(__dirname, '/../src')
let publicPath = '/assets/'
let additionalPaths = []

module.exports = {
  additionalPaths: additionalPaths,
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.scss'
    ],
    alias: {
      actions: srcPath + '/actions/',
      components: srcPath + '/components/',
      molecules: srcPath + '/components/molecules',
      helpers: srcPath + '/components/helpers',
      atoms: srcPath + '/components/atoms',
      organisms: srcPath + '/components/organisms',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /react-icons[\\\/](.)*(.js)$/,
        loader: 'babel'
      },
      {
        test: /auth0-lock[\\\/].*\.js$/,
        loaders: [
          'transform-loader/cacheable?brfs',
          'transform-loader/cacheable?packageify'
        ]
      },
      {
        test: /auth0-lock[\\\/].*\.ejs$/,
        loader: 'transform-loader/cacheable?ejsify'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 8']
      })
    ]
  },
  sassLoader: {
    includePaths: [srcPath]
  }
}
