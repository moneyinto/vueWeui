<template>
    <div id="Home">
        <div>{{ msg }}</div>
        <img src="../../assets/logo.png">

        <router-link class="text-red" to="me">me</router-link>

        <button @click="alert()">dialog</button>

        <dialog-tip v-if="dialog.visible" @cancelDialog="dialog.visible = false" @dialogSure="dialog.visible = false" v-bind:title="dialog.title" v-bind:message="dialog.message" v-bind:visible="dialog.visible"></dialog-tip>

        <loading v-if="loading"></loading>
    </div>
</template>

<script>
import dialogTip from '../../components/dialogTip';

import loading from '../../components/loading';

export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            loading: true,
            dialog: {
                visible: false,
                title: '提示',
                message: ''
            }
        };
    },

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    },

    components: {
        dialogTip,
        loading
    },

    methods: {
        alert() {
            this.dialog.visible = true;
            this.dialog.message = '好好好！';
        }
    }
};
</script>

<style scoped>
    @import '../style/style.css';
</style>
