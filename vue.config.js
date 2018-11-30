const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var BabelPlugin = require('webpack-babel-plugin')

var publicPath = ''
var outputDir = {}
if (process.env.NODE_PUB_PATH) {
  publicPath = process.env.NODE_PUB_PATH
  outputDir.publicPath = publicPath
}

module.exports = {
  // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 部署应用时的基本 URL; 你必须正确地设置这个值以使生产环境中静态资源加载正确
  // baseUrl: process.env.NODE_ENV === 'production' ? 'api.myzebravip.com' : 'testbanmaapi.91bushou.com',
  baseUrl: process.env.NODE_PUB_PATH || '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    // outputDir: {
    //   path: path.resolve(__dirname, './dist'),
    //   publicPath: process.env.NODE_PUB_PATH || './'
    // },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'src/verify'),
        to: './',
        ignore: ['.*']
      }]),
      new BabelPlugin({
        test: /\.js$/,
        babelOptions: {
          compact: false,
          sourceMap: false
        }
      })
    ]
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          }), // 换算的基数
          require('autoprefixer')({})
        ]
      }
    }
  },
  // 图片资源统一采用～images的方式引用
  chainWebpack: (config) => {
    config.resolve.alias
      .set('images', path.join(__dirname, 'src/assets/image'))
  },
  // 请参考webpack-dev-server && http-proxy-middleware
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/benefit': {
        target: 'https://testquanyiapi.91bushou.com',
        // target: 'https://m.51bushou.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 前端自行添加用与区分请求，
          '/benefit': ''
        }
      },
      '/pay': {
        // (zebra)
        target: 'https://testcheckstand.91bushou.com',
        // target: 'https://testquanyiapi.91bushou.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 前端自行添加用与区分请求，
          '/pay': ''
        }
      },
      '/api': {
        // (zebra)
        target: 'https://testbanmaapi.91bushou.com',
        // target: 'http://192.168.1.77:8080',
        changeOrigin: true,
        pathRewrite: {
          // 前端自行添加用与区分请求，
          // '^/h5c': ''
        }
      }

    }
  }
}
