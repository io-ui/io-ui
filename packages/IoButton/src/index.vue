<template>
    <button class="io-button"
            @click="handleClick"
            :class="[
            type ? 'io-button-' + type: '',
            {
                'is-disabled':disabled
            },
            sizeType]">
        <IoIcon
            v-if="icon"
            :name="icon"
            :color="iconColor"
            style="margin-right: 2px"></IoIcon>
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
        },
        icon: {
            type: String
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
        },
        iconColor () {
            if (this.type === 'default' && this.disabled === false) {
                return '#000000'
            } else if (this.type === 'default' && this.disabled === true) {
                return '#BFBFBF'
            } else {
                return '#FFFFFF'
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
