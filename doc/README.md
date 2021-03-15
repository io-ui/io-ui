---
home: true
heroImage:
actionText: 快速上手 →
actionLink: /zh/
features:
- title: Vue驱动
  details: 采用 Vue 作为基本框架
- title: 快速上手
  details: 只需要通过几个简单步骤即可上手
- title: 自动化测试
  details: 采用 Karma + Sinon + Chai 做自动化测试
footer: MIT Licensed | Copyright © 2020-present io-ui
---

# hello world

## 安装

```bash
npm install io-ui
```

## 导入

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
