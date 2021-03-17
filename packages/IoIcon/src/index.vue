<template>
    <div class='io-icon'
         :style="{
            display: 'inline-flex',
            height: iconSize,
            width: iconSize
    }">
        <svg :style="{fill:color}"
             :class="[
                `io-icon-`+iconName,
                {
                    'icon-loading':~name.indexOf('load'),
                    'is-disabled':disabled
                }
            ]
        ">
            <use :xlink:href='`#icon-${iconName}`'></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'IoIcon',
    props: {
        color: String,
        disabled: Boolean,
        name: {
            type: String,
            default: 'question'
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
        },
        iconName () {
            if (this.name === 'load1') {
                return 'spinner'
            } else if (this.name === 'load2') {
                return 'circle-notch'
            }
            return this.name
        }
    }
}
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
