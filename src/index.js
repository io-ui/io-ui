// 统一导出组件
import IoHelloWorld from '../packages/HelloWorld'
import IoIcon from '../packages/IoIcon/'
import '../packages/IoIcon/src/font/iconfont'
import VueCompositionApi from '@vue/composition-api'

const components = {
    IoHelloWorld,
    IoIcon
}

const install = function (Vue) {
    Vue.use(VueCompositionApi)
    Object.values(components).forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: '0.0.1',
    install,
    IoHelloWorld,
    IoIcon
}
