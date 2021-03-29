# button 按钮

## 简单用法

基础的按钮用法。

::: demo  `button`
```vue
<template>
    <IoButton>hello</IoButton>
    <IoButton type="primary">hello</IoButton>
    <IoButton type="info">hello</IoButton>
    <IoButton type="success">hello</IoButton>
    <IoButton type="error">hello</IoButton>
    <IoButton type="warning">hello</IoButton>
</template>
```
:::

## 禁用状态

按钮不可用状态。

:::demo  `button` 通过设置disabled属性值来控制
```
<template>
    <IoButton disabled>hello</IoButton>
    <IoButton type="primary" disabled>hello</IoButton>
    <IoButton type="info" disabled>hello</IoButton>
    <IoButton type="success" disabled>hello</IoButton>
    <IoButton type="error" disabled>hello</IoButton>
    <IoButton type="warning" disabled>hello</IoButton>
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

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 通过icon来配置按钮中icon
```vue
<template>
    <IoButton icon="home"></IoButton>
    <IoButton type="primary" icon="home">hello</IoButton>
    <IoButton type="info" icon="home">hello</IoButton>
    <IoButton type="success" icon="home">hello</IoButton>
    <IoButton type="error" icon="home">hello</IoButton>
    <IoButton type="warning" icon="home">hello</IoButton>
</template>
```
:::

## 不同尺寸

Button 组件提供除了三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：small、normal、big，通过设置size属性来配置它们。
```vue
<template>
    <IoButton size="small">hello</IoButton>
    <IoButton size="normal">hello</IoButton>
    <IoButton>hello</IoButton>
    <IoButton size="big">hello</IoButton>
</template>
```
:::

## 参数


<ClientOnly>
<button-attributes></button-attributes>
</ClientOnly>
