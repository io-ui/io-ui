const webpackTestConfig = require('../../build/webpack.config.test')
const path = require('path')

module.exports = function (config) {
    config.set({
        webpack: webpackTestConfig,
        frameworks: ['mocha', 'sinon-chai'], // 测试框架随便一定要要和我一样
        files: [
            './index.js' // 推荐使用一个入口来导入所有的测试。
        ],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'] // 使用什么配置
        },
        reporters: ['spec', 'coverage-istanbul'], // spec显示插件
        port: 9876, // 端口
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        // 配置代码覆盖率插件
        coverageIstanbulReporter: {
            // 以什么格式, 这里设置了输出 html文件 ,info文件 ,及控制台
            reports: ['html', 'lcovonly', 'text-summary'],
            // 将文件输出路径定位
            dir: path.join(__dirname, 'coverage'),
            // 修正 weback 路径（翻译了是这个意思）
            fixWebpackSourcePaths: true,
            // 将生成的html放到./coverage/html/下
            'report-config': {
                html: {
                    subdir: 'html'
                }
            }
        }
    })
}
