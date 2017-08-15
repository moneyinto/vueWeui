import Loading from './loading';
import dialogTip from './dialogTip';
import weuiBtn from './weuiBtn';

import radio from './input/radio/radio';
import customRadio from './input/radio/customRadio';
import radioItem from './input/radio/radioItem';
import checkbox from './input/checkbox';

export default {
    install(Vue) {
        Vue.component('Loading', Loading);
        Vue.component('dialogTip', dialogTip);
        Vue.component('weuiBtn', weuiBtn);

        Vue.component('radio', radio);
        Vue.component('customRadio', customRadio);
        Vue.component('radioItem', radioItem);
        Vue.component('checkbox', checkbox);
    }
};
