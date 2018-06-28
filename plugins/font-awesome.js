// tslint:disable:quotemark
import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-pro-regular';
import light from '@fortawesome/fontawesome-pro-light';
import solid from '@fortawesome/fontawesome-pro-solid';

// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(regular);
fontawesome.library.add(light);
fontawesome.library.add(solid);
Vue.component('fa-icon', FontAwesomeIcon);
