# 快速上手

## 引入Io

### 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import App from './App.vue'
import IoUi from 'io-ui'
import 'io-ui/package/main.css'

Vue.config.productionTip = false
Vue.use(IoUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
```
