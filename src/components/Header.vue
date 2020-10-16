<template>
    <div class="header-box">
        <div class="pubwidth header-body">
            <div class="header-logo">
                <img src="../assets/images/head.png" alt="">
            </div>
            <nav class="header-nav">
                <router-link :class='"hn-item" + (this.$store.state.navSel == ""? " cur" : "")' to="/">首页</router-link>
                <router-link :class='"hn-item" + (this.$store.state.navSel == "articles"? " cur" : "")' to="/main/articles">文章</router-link>
                <router-link :class='"hn-item" + (this.$store.state.navSel == "projects"? " cur" : "")' to="/main/projects">项目</router-link>
                <router-link :class='"hn-item" + (this.$store.state.navSel == "message"? " cur" : "")' to="/main/message">留言</router-link>
                <router-link :class='"hn-item" + (this.$store.state.navSel == "about"? " cur" : "")' to="/main/about">关于</router-link>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyHeader extends Vue{
    // public curs!: string
    // @Prop() private sel!: string;
    // @Watch('sel')
    // getSel(v: string) {
    //     this.curs = v
    // }
}
</script>

<style lang="scss">
.header-box{
    height: 60px;
    box-shadow: 2px 0 4px rgba(0,0,0,.3);
    .header-body{
        display: flex;
        .header-logo{
            width: 50px;
            height: 50px;
            border-radius: 50px;
            position: relative;
            top: 5px;
            overflow: hidden;
            background-color: #f1f1f1;
            img{
                display: flex;
                width: 100%;
            }
        }
        .header-nav{
            display: flex;
            margin-left: 40px;
            .hn-item{
                display: block;
                padding: 0 30px;
                line-height: 60px;
                font-size: 16px;
                height: 60px;
                box-sizing: border-box;
            }
            .hn-item:hover,.hn-item.cur{
                color: #409eff;
                border-bottom: 2px solid #409eff;
            }
        }
    }
}
</style>