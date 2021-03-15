<template>
  <div class="helloworld">
    hello,{{ this.test() }}
  </div>
</template>

<script>
export default {
    name: 'IoHelloWorld',
    methods: {
        test () {
            return 'world'
        }
    }
}
</script>

<style scoped>
@import "index.scss";
</style>
