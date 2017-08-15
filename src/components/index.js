import Loading from './loading';
import dialogTip from './dialogTip';
import weuiBtn from './weuiBtn';

import radioList from './input/radio/radioList';
import customRadioList from './input/radio/customRadioList';
import radioItem from './input/radio/radioItem';
import checkboxList from './input/checkbox/checkboxList';
import customCheckboxList from './input/checkbox/customCheckboxList';
import checkboxItem from './input/checkbox/checkboxItem';

export default {
    install(Vue) {
        Vue.component('Loading', Loading);
        Vue.component('dialogTip', dialogTip);
        Vue.component('weuiBtn', weuiBtn);

        Vue.component('radioList', radioList);
        Vue.component('customRadioList', customRadioList);
        Vue.component('radioItem', radioItem);
        Vue.component('checkboxList', checkboxList);
        Vue.component('customCheckboxList', customCheckboxList);
        Vue.component('checkboxItem', checkboxItem);
    }
};
