import Vue from 'vue'
import App from './App.vue'
// 使用ioui
import IoUi from '../src/index'

Vue.use(IoUi)

new Vue({
    render: h => h(App)
}).$mount('#app')
