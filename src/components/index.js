import loading from './loading';
import dialogTip from './dialogTip';
import weuiBtn from './weuiBtn';

import radioList from './input/radio/radioList';
import customRadioList from './input/radio/customRadioList';
import radioItem from './input/radio/radioItem';
import checkboxList from './input/checkbox/checkboxList';
import customCheckboxList from './input/checkbox/customCheckboxList';
import checkboxItem from './input/checkbox/checkboxItem';
import vwInput from './input/input';
import switchInput from './input/switch';
import vmTextarea from './input/textarea';

export default {
    install(Vue) {
        Vue.component('loading', loading);
        Vue.component('dialogTip', dialogTip);
        Vue.component('weuiBtn', weuiBtn);

        Vue.component('radioList', radioList);
        Vue.component('customRadioList', customRadioList);
        Vue.component('radioItem', radioItem);
        Vue.component('checkboxList', checkboxList);
        Vue.component('customCheckboxList', customCheckboxList);
        Vue.component('checkboxItem', checkboxItem);
        Vue.component('vwInput', vwInput);
        Vue.component('switchInput', switchInput);
        Vue.component('vmTextarea', vmTextarea);
    }
};
