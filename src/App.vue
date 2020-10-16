<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>

<style lang="scss">
@import '@/assets/sass/public.scss';
#app {
    height: 100%;
    font-size: .24rem;
    overflow: hidden;
}
</style>
