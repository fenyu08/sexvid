module.exports = {
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
      port: '8082',
      open: true,
      proxy: {
        '/api': {
          // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
          // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
          target: 'http://52.220.233.230:17999',
          // 此处target的意义在于：造成跨域是因为访
          // 问的host与我们的请求头里的origin不一致，所以我们要设置成一致，这个具体请看下文
          changeOrigin: true,
          pathRewrite: {'^/api': ''}
          
        }
      }
    }
  }