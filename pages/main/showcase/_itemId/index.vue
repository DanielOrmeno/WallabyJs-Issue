<script lang="ts">
import { IItemService } from '~/@hd/app/services/item';
import { Item } from '~/@hd/core/model/item';
import { Component, HdInject, TYPES, Vue  } from '~/@hd/vue';
import Loader from '~/components/app/Loader.vue';
import ItemComponent from '~/components/item/hd-item.vue';

@Component({
  name: 'hd-showcase-item',
  components: { 'hd-item': ItemComponent, 'hd-loader': Loader }
})
export default class Main extends Vue {
    @HdInject(TYPES.ItemService) service?: IItemService;
    loading = false;
    item: Item = new Item();

    mounted() {
        this.loading = true;

        setTimeout(() => {
            if (this.service) {
                this.service.getItem('123').then(r => this.item = r);
            }

            this.loading = false;
        }, 1000);
    }
}
</script>
<template>
    <div class="hd-min-height">
        <div class="md-layout hd-min-height" v-if="loading">
            <hd-loader></hd-loader>
        </div>
        <hd-item v-else v-bind.sync="item"></hd-item>
    </div>
</template>