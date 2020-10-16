<template>
    <div class="message-box">
        <div class="pubwidth message-body">
            <div class="message-left">
                <div class="message-form">
                    <div class="message-text">
                        <input type="text" maxlength="100" placeholder="请输入邮箱">
                    </div>
                    <div class="message-text">
                        <input type="text" maxlength="100" placeholder="请输入手机号码">
                    </div>
                    <div class="message-text">
                        <input type="text" maxlength="100" placeholder="请输入名称">
                    </div>
                    <div class="message-text">
                        <textarea name="" id="" cols="30" rows="10" maxlength="500" placeholder="请输入您的意见或建议"></textarea>
                    </div>
                    <div class="message-btn">
                        提 交
                    </div>
                </div>
            </div>
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
export default class Message extends Vue{
    created () {
        this.$store.state.navSel = 'message'
    }
}
</script>

<style lang="scss">
.message-box{
    height: 100%;
    overflow-y: auto;
    .message-body{
        display: flex;
        .message-left{
            width: 830px;
            height: 100%;
            .message-form{
                width: 400px;
                margin: 60px auto 0 auto;
                .message-text{
                    border: 1px solid #e1e1e1;
                    min-height: 40px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    overflow: hidden;
                    input,textarea{
                        border: 0;
                        display: block;
                        width: 100%;
                        height: 40px;
                        padding-left: 15px;
                        font-size: 14px;
                        color: #666;
                        box-sizing: border-box;
                    }
                    textarea{
                        resize: none;
                        height: 100px;
                        padding: 10px 15px;
                    }
                }
                .message-btn{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    margin: 0 auto;
                    text-align: center;
                    font-size: 14px;
                    background-color: #409eff;
                    color: #fff;
                    border-radius: 4px;
                    cursor: pointer;
                    user-select: none;
                }
                .message-btn:active{
                    background-color: #008BF1;
                }
            }
        }
    }
}
</style>