<template>
    <button class="io-button"
            @click="handleClick"
            :class="[
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
        }
    },
    methods: {
        handleClick () {
            if (!this.disabled) {
                this.$emit('click')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
