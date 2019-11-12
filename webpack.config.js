module.exports = {
    module: {
      rules: [
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }
      ],
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        }, 
        {
            test: /\.s[a|c]ss$/,
            loader: 'style!css!sass'
        }
      ]
    },
    vue: {
      loaders: {
        scss: 'style!css!sass'
      }
    }
  }