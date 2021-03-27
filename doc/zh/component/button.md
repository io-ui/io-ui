# icon 图标

## 简单用法

::: demo  `io-ui` button 组件示例
```vue
<template>
  <IoButton>hello</IoButton>
        <IoButton disabled>hello</IoButton>
        <br>
        <IoButton type="primary">hello</IoButton>
        <IoButton type="primary" disabled>hello</IoButton>
        <br>
        <IoButton type="info">hello</IoButton>
        <IoButton type="info" disabled>hello</IoButton>
        <br>
        <IoButton type="success">hello</IoButton>
        <IoButton type="success" disabled>hello</IoButton>
        <br>
        <IoButton type="error">hello</IoButton>
        <IoButton type="error" disabled>hello</IoButton>
        <br>
        <IoButton type="warning">hello</IoButton>
        <IoButton type="warning" disabled>hello</IoButton>
        <br>
        <IoButton @click="clickCount(cnt) ">{{ cnt }}</IoButton>
        <IoButton @click="clickCount1(cnt1)" disabled>{{ cnt1 }}</IoButton>
</template>
<script>
export default {
    data () {
        return {
            cnt: 1,
            cnt1: 1
        }
    },
    methods: {
        clickCount (i) {
            this.cnt = i + 1
        },
        clickCount1 (i) {
            this.cnt1 = i + 1
        }
    }
}
</script>
```
:::

## 参数


<ClientOnly>
<button-attributes></button-attributes>
</ClientOnly>
