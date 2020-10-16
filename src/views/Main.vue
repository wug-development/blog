<template>
    <div class="main-box">
        <div class="main-header">
            <MyHeader></MyHeader>
        </div>
        <div class="main-body">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '../components/Header.vue';

@Component({
    props: [],
    components: {
        MyHeader
    },
    computed: {},
    watch: {}
})
export default class Main extends Vue{

}
</script>

<style lang="scss">
.main-box{
    height: 100%;
    padding-top: 60px;
    overflow: hidden;
    box-sizing: border-box;
    .main-header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }
    .main-body{
        height: 100%;
    }
}
</style>