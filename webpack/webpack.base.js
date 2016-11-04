var path = require('path')
var autoprefixer = require('autoprefixer')

module.exports = {

  entry: {
    app: [path.resolve(__dirname, '../src/main.js')]
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.js', '.html', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'spectre': path.join(__dirname, '../node_modules/spectre.css')
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },

      {
        test: /\.html$/,
        loader: 'vue-html'
      },

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?prefix=img/&limit=5000'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap!postcss'
      },

      {
        test: /\.less$/,
        loader: 'style!css!less'
      },

      {
        test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-object-rest-spread','transform-runtime']
  },

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  postcss: function () {
    return [autoprefixer]
  }
}
