<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'hd-showcase-item-component',
  props: {
      firstName: String,
      lastName: String,
      date: Date,
      time: Date,
      doctor: String,
      code: String,
      urNumber: String,
      status: String
  }
})
export default class Main extends Vue {
    updateProp(prop: string, value: any) {
        this.$emit(`update:${prop}`, value);
    }
}
</script>
<template>
    <div class="md-layout md-alignment-center-center hd-flex-direction-column">
        <form novalidate class="md-layout-item md-size-50">
            <div class="md-title">Item Component</div>
            <div>
                <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="firstName">First Name</label>
                    <md-input type="text" id="firstName" name="firstName" :value="firstName" @input="updateProp('firstName', $event)"/>
                </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="lastName">lastName</label>
                    <md-input type="text" id="age" name="lastName" autocomplete="lastName" :value="lastName" @input="updateProp('lastName', $event)"/>
                </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="urnumber">UrNumber</label>
                    <md-input type="number" id="age" name="urnumber" autocomplete="urnumber" :value="urNumber" @input="updateProp('urNumber', $event)"/>
                </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="date">Admission Date</label>
                    <md-input type="text" id="date" name="date" :value="date" @input="updateProp('date', $event)"/>
                </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="time">Admission Time</label>
                    <md-input type="text" id="time" name="time" :value="time" @input="updateProp('time', $event)"/>
                </md-field>
                </div>
            </div>

            <md-progress-bar md-mode="indeterminate"/>
            <md-button type="submit" class="md-primary">Create user</md-button>
        </form>
    </div>
</template>