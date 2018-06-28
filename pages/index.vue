<script lang="ts">
import { Component, Vue } from '~/@hd/vue';
import Loader from '~/components/app/Loader.vue';

@Component({
  name: 'hd-landing',
  components: { 'hd-loader': Loader },
})
export default class Landing extends Vue {
  mounted() {
    setTimeout(() => {
      this.$router.replace('/main/profile/123');
    }, 2000);
  }
}
</script>
<template>
  <div class="splash">
    <div class="hd-flex hd-flex-direction-column hd-justify-content-center container">
      <h1>LOADING!</h1>
      <hd-loader></hd-loader>
    </div>
  </div>
</template>

<style lang="less" scoped>
.splash {
  position: absolute;
  height: 100vh;
  width: 100%;

  .container {
    align-items: center;
    height: 100%;
    font-size: 2em;
  }
}
</style>

