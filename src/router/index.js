import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Button from '@/pages/button/button';
import Input from '@/pages/input/input';
import List from '@/pages/list/list';
import Slider from '@/pages/slider/slider';
import Navbar from '@/pages/navbar/navbar';
import Tabbar from '@/pages/tabbar/tabbar';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },

        {
            path: '/home',
            name: 'Home',
            component: Home
        },

        {
            path: '/button',
            name: 'button',
            component: Button
        },

        {
            path: '/input',
            name: 'input',
            component: Input
        },

        {
            path: '/list',
            name: 'list',
            component: List
        },

        {
            path: '/slider',
            name: 'slider',
            component: Slider
        },

        {
            path: '/navbar',
            name: 'navbar',
            component: Navbar
        },

        {
            path: '/tabbar',
            name: 'tabbar',
            component: Tabbar
        }
    ]
});
