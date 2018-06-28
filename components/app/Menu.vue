<script lang="ts">
import { Component, Vue } from '~/@hd/vue';

@Component({
    name: 'hd-menu'
})
export default class extends Vue {
    menuItems: any[] = [];

    mounted() {
        this.menuItems = [
            { number: 0, path: '/main/showcase/itemlist', icon: 'wrench', label: this.$t('menu.developerGuide') },
            { number: 1, path: '/main', icon: 'home', label: this.$t('menu.home') },
            { number: 2, path: '/charts', icon: 'clipboard-list', label: this.$t('menu.charts') },
            { number: 3, path: '/create-customer', icon: 'user', label: this.$t('menu.createCustomer') }
        ];
    }

    toggleMenu() {
        this.$emit('hd-toggle-menu');
    }
}
</script>
<template>
    <div>
        <md-toolbar class="md-transparent" md-elevation="0">
            <div class="md-toolbar-section-start">
                <div class="hd-logo"></div>
            </div>
            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button md-dense" @click="toggleMenu">
                    <md-icon><fa-icon :icon="['fal', 'chevron-left']"/></md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-list>
          <md-list-item v-for="item in menuItems" :key="item.number" :to="item.path">
            <md-icon><fa-icon :icon="['fal', item.icon]"/></md-icon>
            <span class="md-list-item-text">{{item.label}}</span>
          </md-list-item>
        </md-list>
    </div>
</template>
<style lang="less" scoped>
    .md-list-item {
        a, i {
            color: black !important;
        }
    }
    .md-list {
        background-color: transparent !important;
    }
</style>