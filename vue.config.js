const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/wy": {
        target: "https://c.m.163.com",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/wy": ""
        }
      }
    }
  },
}
