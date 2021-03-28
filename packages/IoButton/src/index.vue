<template>
    <button class="io-button"
            @click="handleClick"
            :class="[
            sizeType,
            type ? 'io-button-' + type: '',
            {
                'is-disabled':disabled
            }]">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'IoButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal'
        }
    },
    methods: {
        handleClick () {
            if (!this.disabled) {
                this.$emit('click')
            }
        }
    },
    computed: {
        sizeType () {
            const sizeList = ['big', 'small']
            if (sizeList.includes(this.size)) return 'size-' + this.size
            return 'size-normal'
        }
    }
}
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
