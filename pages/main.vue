<script lang="ts">
import { BreakpointResolver } from '~/@hd/core/classes/IBreakpointsResolver';
import { Component, Getter, HdContainer, HdProvide, TYPES, Vue } from '~/@hd/vue';
import Menu from '~/components/app/Menu.vue';
import Navbar from '~/components/app/Navbar.vue';

@Component({
  components: { 'hd-navbar': Navbar, 'hd-menu': Menu }
})
@HdProvide(HdContainer)
export default class Main extends Vue {
  menuVisible = false;

  @Getter('getLocale') lang?: () => string;
  private viewPort?: BreakpointResolver;

  mounted(): void {
    this.viewPort = HdContainer.get(TYPES.BreakpointResolver);
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  get isHandset(): boolean {
    return this.viewPort ? this.viewPort.isPortraitHandset() : false;
  }
}
</script>
<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-default main" md-elevation="0">
        <hd-navbar :menuOpen="menuVisible" v-on:hd-toggle-menu="toggleMenu"></hd-navbar>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <hd-menu v-on:hd-toggle-menu="toggleMenu"></hd-menu>
      </md-app-drawer>
        <md-app-content>
            <router-view></router-view>
        </md-app-content>
    </md-app>
  </div>
</template>