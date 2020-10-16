<template>
    <div class="labels-box">
        <div class="labels-body">
            <div class="labels-head">
                <div class="head-img">
                    <img src="../assets/images/head.png" alt="">
                </div>
                <div class="head-name">Guang Wu</div>
            </div>
            <div class="at-labels">
                <div class="at-type">前端</div>
                <dl class="at-label-list">
                    <dd>Webpack</dd>
                    <dd>Vue</dd>
                    <dd>Javascript</dd>
                    <dd>Node</dd>
                    <dd>Grunt</dd>
                    <dd>Gulp</dd>
                    <dd>React</dd>
                    <dd>Jquery</dd>
                </dl>
                <div class="at-type">后端</div>
                <dl class="at-label-list">
                    <dd>Webpack</dd>
                    <dd>Vue</dd>
                    <dd>Javascript</dd>
                    <dd>Node</dd>
                    <dd>Grunt</dd>
                    <dd>Gulp</dd>
                    <dd>React</dd>
                    <dd>Jquery</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.labels-box{
    width: 380px;
    .labels-body{
        position: fixed;
        width: 380px;
        z-index: 1;
        .labels-head{
            padding-top: 40px;
            height: 180px;
            border-bottom: 1px solid #e1e1e1;
            .head-img{
                position: relative;
                margin: 0 auto;
                width: 120px;
                height: 120px;
                border-radius: 120px;
                overflow: hidden;
                background-color: rgba(255,255,255,.1);
                animation: csize 1.2s ease 0s infinite alternate;
                img{
                    display: block;
                    width: 100%;
                    position: relative;
                    left: -5px;
                }
            }
            .head-name{
                text-align: center;
                margin-top: 15px;
                font-size: 16px;
                color: #666;
            }
        }
        .at-labels{
            padding-top: 20px;
            .at-type{
                font-size: 16px;
                color: #808080;
                text-indent: 15px;
            }
            .at-label-list{
                display: flex;
                flex-wrap: wrap;
                padding: 20px 0;
                dd{
                    background-color: #f1f1f1;
                    padding: 5px 10px;
                    margin: 0 15px 10px 0;
                    cursor: pointer;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>
