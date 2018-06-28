# Health Director 3.0

> Health Director Client

# Project 

## Dependencies
* [Nuxt](https://nuxtjs.org)
* [Vue](https://vuejs.org)
* [Vue-material](https://vuematerial.io)
* [Font Awesome 5](https://fontawesome.com)
* [Inversity](http://inversify.io/)

## Lang
* [Typescript](https://www.typescriptlang.org/)
* [Less](http://lesscss.org/)

## Recommended Workspace Setup
* [vs code](https://code.visualstudio.com/)
* [Vetur](https://vuejs.github.io/vetur)
* [TSLint Vue](https://marketplace.visualstudio.com/items?itemName=prograhammer.tslint-vue)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

# Inversion of Control

## IOC container
We use [Inversify JS](http://inversify.io/) as our IOC container, and [vue-inversify-decoretor](https://github.com/ktsn/vue-inversify-decorator) to provide dependency injection into our components.

## DI in a component.
Lets asume that we have a component called `itemList.vue`, which is in charged of rendering a list of items. To get the list, the component has a dependency of type `IItemService`. Through dependency injection we can declare the property `service: IItemService` using a decorator:

``` typescript
@Inject(TYPES.ItemService) service?: IItemService;
```
> TYPES.ItemService declares the mapping for IItemService.

Inversify will automatically resolve the dependency (and its dependencies) and inject the instance of `IItemService`.

# Vue components
## Our components are:

* Data driven
* Follow MVVM
* Simple
* Minimal
* Async
* Do no heavy lifting (i.e. API calls, Mappings, Business Logic)

## Template `itemList.vue`
``` html
<script lang="ts">
import { IItemService } from '~/@hd/app/services/item/item.service.interface';
import { Item } from '~/@hd/core/model/item';
import { Component, HdInject, TYPES, Vue  } from '~/@hd/vue';

@Component({ name: 'hd-showcase-list', props: { someProp: Object } })
export default class Main extends Vue {
    // dependency (resolved by IOC)
    @HdInject(TYPES.ItemService) service?: IItemService;

    // data property
    items: Item[] = [];

    // lifecycle hook
    async mounted() {
        if (this.service) {
            this.items = await this.service.getItemList();
        }
    }

    // method
    async addItem(item: Item): void {
        this.items.push(item);
    }

    // computed
    get lastItem(): Item {
        return this.items[this.items.length - 1];
    }
}
</script>
<template>
    <!-- ... -->
</template>
<style lang="less" scoped>
    @import '~/assets/styles/variables.less';
    // component styles.
</style>
```

# Styling Guidelines
## Health Director Theme
A theme is to be created and maintained to overwrite the default colours of the selected library. Any styles that need to be modified at the component level should live within `theme.scss`. The theme style sheet can be found in

``` bash
# ~/assets/styles/theme.scss
```

## Global Helper classes
A global stylesheet has been defined to include all the global classes and mixins. General styles should live in here. all classes should be prefixed with `hd-`. For Example.

``` css
/* file located at ~/assets/styles/global.less */

.hd-flex {
    display: flex;
}

.hd-min-height {
    min-height: 70vh;
}
```

## Global Variables.
Colour variables and other mixins should live in the `variables.less` stylesheet and prefixed with `hd-`.

``` less
/* file located at ~/assets/styles/variables.less */

@hd-purple: #806a89;
@hd-purple-hover: #a77cb9;
@hd-blue: #4e8fcb;
@hd-blue-active: #3075b4;
@hd-warning: #E14657;
@hd-warning-active: #e13051;
@hd-turquoise: #46c0bd;
@hd-turquoise-active: #2f9d9a;
```

## Nuxt Documentation
For detailed explanation on Nuxt, checkout [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
