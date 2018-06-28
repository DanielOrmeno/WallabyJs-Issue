<script lang="ts">
import { IItemService } from '~/@hd/app/services/item/item.service.interface';
import { Item } from '~/@hd/core/model/item';
import { Component, HdInject, TYPES, Vue  } from '~/@hd/vue';

@Component({
  name: 'hd-showcase-list'
})
export default class Main extends Vue {
    @HdInject(TYPES.ItemService) service?: IItemService;
    items: Item[] = [];

    async mounted() {
        if (this.service) {
            this.items = await this.service.getItemList();
        }
    }

    navigate(itemId: string) {
        this.$router.push(`/main/showcase/${itemId}`);
    }
}
</script>
<template>
    <div class="hd-min-height">
        <md-table>
            <md-table-toolbar>
                <h1 class="md-title">List Items</h1>
            </md-table-toolbar>

            <md-table-row>
                <md-table-head></md-table-head>
                <md-table-head>Date</md-table-head>
                <md-table-head>Time</md-table-head>
                <md-table-head>Doctor</md-table-head>
                <md-table-head>Code</md-table-head>
                <md-table-head>UR Number</md-table-head>
                <md-table-head>Status</md-table-head>
            </md-table-row>
            
            <md-table-row v-for="item in items" :key="item.id" @click="navigate(item.id)">
                <md-table-cell>
                    <md-icon><fa-icon :icon="['fal', 'folder']"/></md-icon>
                </md-table-cell>
                <md-table-cell>{{item.date}}</md-table-cell>
                <md-table-cell>{{item.time}}</md-table-cell>
                <md-table-cell>{{item.doctor}}</md-table-cell>
                <md-table-cell>{{item.code}}</md-table-cell>
                <md-table-cell>{{item.urNumber}}</md-table-cell>
                <md-table-cell>{{item.status}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>