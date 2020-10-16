<template>
    <div class="home-box">
        <canvas id="sakura"></canvas>
        <div class="home-body">
            <div class="home-head">
                <div class="head-img">
                    <img src="../assets/images/head.png" alt="">
                </div>
            </div>
            <ul class="home-menu">
                <li @click="toPage('articles')">文章</li>
                <li @click="toPage('projects')">项目</li>
                <li><a target="_blank" href="https://github.com/wug-development">Github</a></li>
                <li><a target="_blank" href="https://juejin.im/user/3034307825250669">掘金</a></li>
            </ul>
            <div class="home-sign">
                态度决定一切，用什么样的态度得到什么样的结果。
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { huihua } from '../assets/js/canvasbg.js';
// @ is an alias to /src
@Component
export default class Home extends Vue{
    created () {
        setTimeout(() => {
            huihua()
        }, 1)
    }
    toPage (v: string) {
        this.$router.push({
            path: '/main/' + v
        })
    }
}
</script>
<style lang="scss" scoped>
.home-box{
    height: 100%;
    user-select: none;
    .home-body{
        position: fixed;
        top: 12%;
        left: 50%;
        z-index: 1;
        width: 480px;
        transform: translateX(-50%);
        .home-head{
            height: 220px;
            .head-img{
                position: relative;
                margin: 0 auto;
                width: 220px;
                height: 220px;
                border-radius: 220px;
                overflow: hidden;
                background-color: rgba(255,255,255,.5);
                animation: csize 1.2s ease 0s infinite alternate;
                img{
                    display: block;
                    width: 100%;
                    position: relative;
                    left: -5px;
                }
            }
        }
        .home-menu{
            margin-top: 10%;
            height: 40px;
            line-height: 40px;
            display: flex;
            color: #fff;
            font-size: 16px;
            justify-content: space-between;
            li{
                cursor: pointer;
                width: 60px;
                text-align: center;
            }
            li:hover{
                font-size: 18px;
                border-bottom: 1px solid #fff;
            }
        }
        .home-sign{
            margin-top: 10%;
            text-align: center;
            color: #fff;
            font-size: 16px;
        }
    }
}
@keyframes csize{
    0% { width: 220px; height: 220px; top: 0; }
    100% { width: 170px; height: 170px; top: 25px; }
}
</style>
