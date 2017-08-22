import vmLoading from './loading';
import vmDialogTip from './dialogTip';
import vmBtn from './button.vue';

import vmRadioList from './input/radio/radioList';
import vmCustomRadioList from './input/radio/customRadioList';
import vmRadioItem from './input/radio/radioItem';
import vmCheckboxList from './input/checkbox/checkboxList';
import vmCustomCheckboxList from './input/checkbox/customCheckboxList';
import vmCheckboxItem from './input/checkbox/checkboxItem';
import vwInput from './input/input';
import vmSwitch from './input/switch';
import vmTextarea from './input/textarea';

import vmList from './list/list';
import vmListRow from './list/listRow';
import vmListItem from './list/listItem';
import vmListHd from './list/listHd';
import vmListBd from './list/listBd';
import vmListFt from './list/listFt';

import vmSlider from './slider/slider';

import vmNavbar from './navbar/navbar';
import vmTabbar from './tabbar/tabbar';

export default {
    install(Vue) {
        Vue.component('vmLoading', vmLoading);
        Vue.component('vmDialogTip', vmDialogTip);
        Vue.component('vmBtn', vmBtn);

        Vue.component('vmRadioList', vmRadioList);
        Vue.component('vmCustomRadioList', vmCustomRadioList);
        Vue.component('vmRadioItem', vmRadioItem);
        Vue.component('vmCheckboxList', vmCheckboxList);
        Vue.component('vmCustomCheckboxList', vmCustomCheckboxList);
        Vue.component('vmCheckboxItem', vmCheckboxItem);
        Vue.component('vwInput', vwInput);
        Vue.component('vmSwitch', vmSwitch);
        Vue.component('vmTextarea', vmTextarea);

        Vue.component('vmList', vmList);
        Vue.component('vmListRow', vmListRow);
        Vue.component('vmListItem', vmListItem);
        Vue.component('vmListHd', vmListHd);
        Vue.component('vmListBd', vmListBd);
        Vue.component('vmListFt', vmListFt);

        Vue.component('vmSlider', vmSlider);

        Vue.component('vmNavbar', vmNavbar);
        Vue.component('vmTabbar', vmTabbar);
    }
};
