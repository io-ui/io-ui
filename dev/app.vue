<template>
    <div id="app">
        hello world
        <hr>
        <IoHelloWorld/>
        <hr>

        <br>
        <br>
        icon
        <hr>
        <IoIcon/>
        <IoIcon name="code"/>
        <IoIcon size="14px" disabled/>
        <IoIcon size="14px" disabled/>
        <IoIcon size="14px" name="circle-notch"/>
        <IoIcon name="load1"/>
        <IoIcon name="load2"/>

        <IoIcon name="bong"/>
        <IoIcon name="grip-vertical"/>
        <IoIcon name="sign-language"/>
        <IoIcon name="css-alt"/>
        <IoIcon name="twitter-square"/>
        <IoIcon name="book"/>
        <IoIcon name="hand-holding"/>
        <IoIcon name="sign-out-alt"/>

        <IoIcon color="red"/>
        <hr>

        <br>
        <br>
        button
        <hr>
        <br>
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
        <br>
        <IoButton type="warning" size="small">hello</IoButton>
        <IoButton type="warning" size="normal">hello</IoButton>
        <IoButton type="warning">hello</IoButton>
        <IoButton type="warning" size="big">hello</IoButton>
        <br>
        <IoButton @click="clickCount(cnt) ">{{ cnt }}</IoButton>
        <IoButton @click="clickCount1(cnt1)" disabled>{{ cnt1 }}</IoButton>
        <br>
        <br>
        <IoButton icon="home"></IoButton>

        <IoButton icon="load1">hello</IoButton>
        <IoButton icon="home">hello</IoButton>
        <IoButton icon="home" disabled>hello</IoButton>
        <IoButton type="primary" icon="home">hello</IoButton>
        <IoButton type="primary" icon="home" disabled>hello</IoButton>
        <IoButton type="info" icon="home">hello</IoButton>
        <IoButton type="info" icon="home" disabled>hello</IoButton>
        <IoButton type="success" icon="home">hello</IoButton>
        <IoButton type="success" icon="home" disabled>hello</IoButton>
        <IoButton type="error" icon="home">hello</IoButton>
        <IoButton type="error" icon="home" disabled>hello</IoButton>
        <IoButton type="warning" icon="home">hello</IoButton>
        <IoButton type="warning" icon="home" disabled>hello</IoButton>
        <br>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'app',
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

<style lang="scss">
</style>
