<template>
    <div class="projects-box">
        <div class="pubwidth projects-body">
            <ul class="projects-list">
                <li>
                    <div class="pj-img"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg" alt=""></div>
                    <div class="pj-name" title="150+ 本技术类精华电子书开源了">150+ 本技术类精华电子书开源了本技术类精华电子书开源了</div>
                    <div class="pj-content">项目简介：共克时艰！150+ 本技术类精华电子书开源了，免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍</div>
                    <div class="pj-freame">使用技术：VUE、Typescript、Sass、VUE、Typescript、Sass、VUE、Typescript、Sass、VUE、Typescript、Sass</div>
                    <div class="pj-date">项目日期：2020/02/05 - 2020/10/10</div>
                </li>
                <li>
                    <div class="pj-img"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg" alt=""></div>
                    <div class="pj-name">150+ 本技术类精华电子书开源了</div>
                    <div class="pj-content">项目简介：共克时艰！150+ 本技术类精华电子书开源了，免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍</div>
                    <div class="pj-freame">使用技术：VUE、Typescript、Sass</div>
                    <div class="pj-date">项目日期：2020/02/05 - 2020/10/10</div>
                </li>
                <li>
                    <div class="pj-img"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg" alt=""></div>
                    <div class="pj-name">150+ 本技术类精华电子书开源了</div>
                    <div class="pj-content">项目简介：共克时艰！150+ 本技术类精华电子书开源了，免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍</div>
                    <div class="pj-freame">使用技术：VUE、Typescript、Sass</div>
                    <div class="pj-date">项目日期：2020/02/05 - 2020/10/10</div>
                </li>
                <li>
                    <div class="pj-img"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg" alt=""></div>
                    <div class="pj-name">150+ 本技术类精华电子书开源了</div>
                    <div class="pj-content">项目简介：共克时艰！150+ 本技术类精华电子书开源了，免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍</div>
                    <div class="pj-freame">使用技术：VUE、Typescript、Sass</div>
                    <div class="pj-date">项目日期：2020/02/05 - 2020/10/10</div>
                </li>
            </ul>
            <MyLabels></MyLabels>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyLabels from '../components/Labels.vue'
@Component({
    components: {
        MyLabels
    }
})
export default class Projects extends Vue{
    created () {
        this.$store.state.navSel = 'projects'
    }
}
</script>

<style lang="scss">
.projects-box{
    height: 100%;
    user-select: none;
    overflow-y: auto;
    .projects-body{
        position: relative;
        display: flex;
        justify-content: space-between;
        .projects-list{
            width: 830px;
            height: 100%;
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                width: 404px;
                height: 450px;
                padding: 20px;
                box-sizing: border-box;
                border: 1px solid #e1e1e1;
                margin-bottom: 20px;
                border-radius: 4px;
                overflow: hidden;
                .pj-img{
                    width: 100%;
                    height: 260px;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .pj-name{
                    padding-top: 15px;
                    font-size: 16px;
                    line-height: 20px;
                    height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: bold;
                }
                .pj-content{
                    padding: 5px 0;
                    font-size: 12px;
                    color: #808080;
                    height: 36px;
                    line-height: 20px;
                    overflow: hidden;
                }
                .pj-freame{
                    padding: 5px 0;
                    color: #333;
                    font-size: 12px;
                    line-height: 18px;
                    max-height: 36px;
                    overflow: hidden;
                }
                .pj-date{
                    padding-top: 5px;
                    color: #666;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
