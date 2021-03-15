import IoHelloWorld from './src/index.vue'

IoHelloWorld.install = function (Vue) {
    Vue.component(IoHelloWorld.name, IoHelloWorld)
}

export default IoHelloWorld
