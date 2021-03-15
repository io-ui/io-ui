<template>
    <div class='io-icon'
         :style="{
            display: 'inline-flex',
            height: iconSize,
            width: iconSize
    }">
        <svg :style="{fill:color}"
             :class="[
                `io-`+name,
        ]">
            <use :xlink:href='`#icon-${name}`'></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'IoIcon',
    props: {
        color: String,
        name: {
            type: String,
            default: 'auto'
        },
        size: {
            type: [Number, String],
            default: '1em'
        }
    },
    computed: {
        // 计算属性里面对这个值进行操作, 类型如果是数字, 就我们来给他加上单位吧,也就是默认单位是'px'
        iconSize () {
            if (typeof this.size === 'number') return this.size + 'px'
            else return this.size
        }
    }
}
</script>

<style scoped>

</style>
