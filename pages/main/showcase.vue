<script lang="ts">
import { Component, Vue } from '~/@hd/vue';

@Component({
  name: 'hd-showcase'
})
export default class Main extends Vue {}
</script>
<template>
    <md-card>
      <md-card-content id="showcase-content">
        <md-tabs md-sync-route>
          <md-tab md-label="Item List" to="/main/showcase/itemlist"></md-tab>
          <md-tab md-label="Styleguide" to="/main/showcase/styleguide"></md-tab>
        </md-tabs>
        <router-view></router-view>
      </md-card-content>
    </md-card>
</template>
<style lang="less" scoped>
.showcase-content {
    min-height: 50vh;
}
</style>
