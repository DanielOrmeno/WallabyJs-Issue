<script lang="ts">
import { Component, Vue } from '~/@hd/vue';

@Component({
    name: 'hd-navbar',
    props: {
        menuOpen: Boolean
    }
})
export default class extends Vue {
    menuItems: any[] = [];

    mounted() {
        this.menuItems = [
            { number: 1, path: '/user-profile', icon: 'user', label: this.$t('navbar.profile')},
            { number: 2, path: '/settings', icon: 'cog', label: this.$t('navbar.settings') },
            { number: 3, path: '/logout', icon: 'sign-out', label: this.$t('navbar.signOut') }
        ];
    }

    toggleMenu() {
        this.$emit('hd-toggle-menu');
    }

    navigate(path: string) {
        this.$router.replace(`/main${path}`);
    }
}
</script>
<template>
    <div class="hd-container">
        <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuOpen">
                <md-icon><fa-icon :icon="['fal', 'bars']"/></md-icon>
            </md-button>
            <div class="hd-logo" v-if="!menuOpen"></div>
        </div>
        <div class="md-toolbar-section-end">
            <md-menu md-size="small">
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon><fa-icon :icon="['fal', 'user-circle']"/></md-icon>
                </md-button>
                <md-menu-content>
                    <md-menu-item v-for="item in menuItems" :key="item.number" @click="navigate(item.path)">
                        <span>{{item.label}}</span>
                        <md-icon><fa-icon :icon="['fal', item.icon]"/></md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </div>
    </div>
</template>
<style lang="less" scoped>
.hd-container {
    display: flex;
    width: 100%;
}
</style>
