const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
    configureWebpack: (config) => {
        config.devtool = 'source-map'
        config.plugins =
            [
                new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd(),
                })
          ]
    },

};