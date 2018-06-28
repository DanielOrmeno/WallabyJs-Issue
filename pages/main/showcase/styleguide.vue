<script lang="ts">
import { Component, Vue  } from '~/@hd/vue';

@Component({
  name: 'hd-showcase-styleguide'
})
export default class Main extends Vue {
  title = 'Style Guide!';
}
</script>
<template>
    <div class="hd-min-height">
      <h1>{{title}}</h1>
      <div class="md-layout">
        
      </div>
    </div>
</template>