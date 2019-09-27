const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
	publicPath: "vueditor",
    configureWebpack: (config) => ({
        devtool: 'source-map',
        plugins:
            [
                new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd(),
                onStart({ compilation }) {
                    console.log('start detecting webpack modules cycles');
                },
                // `onDetected` is called for each module that is cyclical
                onDetected({ module: webpackModuleRecord, paths, compilation }) {
                    // `paths` will be an Array of the relative module paths that make up the cycle
                    // `module` will be the module record generated by webpack that caused the cycle
                    compilation.errors.push(new Error(paths.join(' -> ')))
                },
                // `onEnd` is called before the cycle detection ends
                onEnd({ compilation }) {
                    console.log('end detecting webpack modules cycles');
                },
            })
          ]
    }),

};