<script lang="ts">
import { Component, Vue } from '~/@hd/vue';

@Component({
    name: 'hd-loader',
    props: {
        light: Boolean
    }
})
export default class Loader extends Vue {}
</script>
<template>
    <div class="a-loader" :class="{ 'light' : light }">
        
    </div>
</template>
<style lang="less">

</style>