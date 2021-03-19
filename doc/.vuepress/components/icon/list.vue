<template>
    <div>
        <label for="input" class="input-style"></label>
        <textarea class="input-style" id="input"></textarea>
        <div class="toast" v-show="toastShow">
            {{ toastText }}
        </div>
        <div class="container">
            <div class="icon-item" v-for="i in iconList" @click="copyIcon(i)">
                <IoIcon :name="i" :size="35"/>
                <div class="icon-description">{{ i }}</div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "icon-list",
    methods: {
        copyIcon (icon) {
            let input = document.getElementById("input")
            input.value = icon
            input.select()
            // 执行复制
            document.execCommand("Copy")
            this.toast("icon名称已复制成功:" + icon)
        },
        toast (str) {
            let v = this
            v.toastText = str
            v.toastShow = true
            setTimeout(function () {
                v.toastShow = false
            }, 1500)
        }
    },
    data () {
        return {
            // 点击复制
            text: "",
            toastShow: false,
            toastText: '',
            iconList: [
                // load
                "load1",
                "load2",
                // 基本icon
                "home",
                "sign-out-alt",
                "sign-in-alt",
                "bookmark",
                "box",
                // 用户icon
                "user",
                "user-alt",
                "user-alt-slash",
                "user-astronaut",
                "user-check",
                "user-circle",
                "user-clock",
                "user-cog",
                "user-edit",
                "user-friends",
                "user-graduate",
                "user-lock",
                "user-md",
                "user-minus",
                "user-ninja",
                "user-plus",
                "users",
                "users-cog",
                "user-secret",
                "user-shield",
                "user-slash",
                "user-tag",
                "user-tie",
                "user-times",
                "user1",
                "user-circle1",
                // 社交 icon
                "qq",
                "weibo",
                "weixin",
                "telegram",
                "telegram-plane",
                "zhihu",
                "github",
                "github-square",
                "github-alt",
                "gitlab",
                "gitkraken",
                "tencent-weibo",
                "facebook",
                "facebook-f",
                "whatsapp",
                "youtube",
                "linkedin-in",
                // 编程相关
                "trello",
                "git",
                "git-square",
                "node-js",
                "npm",
                "js-square",
                "js",
                "java",
                "jenkins",
                "html",
                "css",
                "css-alt",
                "markdown",
                //Hand Icons
                "hand-holding",
                "hand-holding-heart",
                "hand-holding-usd",
                "hand-lizard",
                "hand-paper",
                "hand-peace",
                "hand-point-down",
                "hand-pointer",
                "hand-point-left",
                "hand-point-right",
                "hand-point-up",
                "hand-rock",
                "hands",
                "hand-scissors",
                "handshake",
                "hands-helping",
                "hand-spock",
                "hand-lizard1",
                "hand-paper1",
                "hand-peace1",
                "hand-point-down1",
                "hand-point-left1",
                "hand-pointer1",
                "hand-point-right1",
                "hand-point-up1",
                "hand-rock1",
                "hand-scissors1",
                "handshake1",
                "hand-spock1",
            ]

        }
    }
}
</script>

<style scoped>
.container {
    width: 98%;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 120px);
    margin-top: 50px;
}

.icon-item {
    width: 120px;
    height: 120px;
    border: 1px solid #404040;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icon-item:hover {
    box-shadow: 0 0 2px #000;
    transform: scale(1.2);
    -ms-transform: scale(1.2); /* IE 9 */
    -moz-transform: scale(1.2); /* Firefox */
    -webkit-transform: scale(1.2); /* Safari 和 Chrome */
    -o-transform: scale(1.2); /* Opera */
}

.icon-description {
    align-items: flex-end;
    font-size: 10px;
}

.input-style {
    opacity:0;
    position:absolute;
}

.toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top: 45%;
    transition: all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color: #FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 250px;
}
</style>
