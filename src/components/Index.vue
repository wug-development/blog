<template>
    <div class="index-box">
        1111
        <canvas id="sakura"></canvas>
    </div>
</template>

<script lang="ts">
// import huakai from '@/assets/js/canvasbg.js'
import {Vue} from 'vue-property-decorator'
// @Component({})
export default class Index extends Vue {
    created () {
        // huakai()
    }
}
</script>

<style lang="scss">
.index-box{
    height: 100%;
    overflow-y: auto;
}
</style>
