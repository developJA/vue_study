const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  }
}