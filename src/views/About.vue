<template>
    <div class="about-box">
        <div class="pubwidth about-body">
            <div>
                <div class="about-title">关于博主</div>
                <div class="about-detail">
                    <div>邮箱：wuguang407906079@163.com</div>
                    <div>微信：wuguang1723 &nbsp;&nbsp;&nbsp;&nbsp; 暗号：博客</div>
                    <div>其它：再写吧</div>
                </div>
            </div>
            <div>
                <div class="about-title">关于博客</div>
                <div class="about-detail">
                    <div>域名：www.wuguang.website</div>
                    <div>环境：Windows + Node Express + TiDB</div>
                    <div>前端：VUE + Typescript + ElementUI + Sass</div>
                    <div>服务器：阿里云</div>
                    <div>备案号：京ICP备 16025808号-1</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue{
    created () {
        this.$store.state.navSel = 'about'
    }
}
</script>

<style lang="scss">
.about-box{
    height: 100%;
    overflow-y: auto;
    .about-body{
        padding-top: 20px;
        display: flex;
        >div{
            width: 620px;
        }
        .about-title{
            padding: 50px 0 25px 0;
            font-size: 20px;
            color: #000;
            letter-spacing: 4px;
        }
        .about-detail{
            margin: 0 auto;
            line-height: 32px;
            font-size: 14px;
            color: #666;
        }
    }
}
</style>
