import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Me from '@/pages/me/me';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },

        {
            path: '/home',
            name: 'Home',
            component: Home
        },

        {
            path: '/me',
            name: 'Me',
            component: Me
        }
    ]
});
