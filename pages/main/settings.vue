<script lang="ts">
import { Action, Component, Getter, Vue } from '~/@hd/vue';

@Component({
  name: 'hd-settings'
})
export default class Settings extends Vue {
    @Action('selectLocale') selectLocale?: (lang: string) => void;
    @Getter('getLocales') langs?: () => string[];

    changeLang(lang: string) {
        if (this.selectLocale) {
            this.$i18n.locale = lang;
            this.selectLocale(lang);
            this.$router.replace('/');
        }
    }
}
</script>
<template>
    <md-card class="hd-min-height">
      <md-card-content>
        <p>Settings</p>
        <md-menu md-size="small">
            <md-button md-menu-trigger>
                Locale <md-icon><fa-icon :icon="['fal', 'globe']"/></md-icon>
            </md-button>
            <md-menu-content>
                <md-menu-item v-for="lang in langs" :key="lang" @click="changeLang(lang)">
                    <span>{{lang}}</span>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
      </md-card-content>
    </md-card>
</template>
