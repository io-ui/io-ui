module.exports = {
    title: 'io-ui Doc',
    description: 'io-ui Doc',
    repo: 'https://github.com/io-ui/io-ui.github.io',
    plugins: [
        'demo-container'
    ],
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/zh/',
            },
            {
                text: 'github',
                link: "https://github.com/io-ui/io-ui"
            }
        ],
        sidebar: {
            '/zh/': [{
                title: '开发指南',
                collapsable: false,
                children: [
                    {title: '安装', path: '/zh/'},
                    {title: '快速上手', path: '/zh/quickstart'}
                ]
            }, {
                title: '组件',
                collapsable: false,
                children: [
                    {title: 'hello world', path: '/zh/component/helloWorld'},
                    {title: 'icon 图标', path: '/zh/component/icon'},
                    {title: 'button 按钮', path: '/zh/component/button'}
                ]
            }]
        },
        sidebarDepth: 1,
    }
}
