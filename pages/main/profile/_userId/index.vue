
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'hd-profile'
})
export default class extends Vue {
    menuItems: any[] = [];

    mounted() {
        this.menuItems =  [
            { number: 1, label: this.$t('profile.item1'), icon: 'file-medical-alt' },
            { number: 2, label: this.$t('profile.item1'), icon: 'pills' },
            { number: 3, label: this.$t('profile.item1'), icon: 'info-square' },
            { number: 4, label: this.$t('profile.item1'), icon: 'address-book' },
            { number: 5, label: this.$t('profile.item1'), icon: 'credit-card' },
            { number: 6, label: this.$t('profile.item1'), icon: 'history' }
        ];
    }
}
</script>

<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-33">
            <md-card class="hd-details-min-height">
                
            </md-card>
        </div>
        <div class="md-layout-item">
            <md-card>
                <div class="md-layout">
                    <div class="md-layout-item" v-for="item in menuItems" :key="item.number">
                        <div class="hd-menu-item">
                            <md-icon><fa-icon :icon="['fal', item.icon]"/></md-icon>
                            <span>{{item.label}}</span>
                        </div>
                    </div>
                </div>
            </md-card>
            <br/>
            <md-card  class="hd-min-height">
                
            </md-card>
        </div>
    </div>
</template>
<style lang="less" scoped>
.hd-details-min-height {
    min-height: 85vh;
}

.hd-menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    span {
        margin-top: 0.5em;
    }
}
.md-layout-item > .hd-menu-item {
    border-right: solid 1px lightgray;
}
.md-layout-item:last-child > .hd-menu-item {
    border-right: none;
}
</style>
