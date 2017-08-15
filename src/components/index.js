import Loading from './loading';
import dialogTip from './dialogTip';
import weuiBtn from './weuiBtn';

export default {
    install(Vue) {
        Vue.component('Loading', Loading);
        Vue.component('dialogTip', dialogTip);
        Vue.component('weuiBtn', weuiBtn);
    }
};
