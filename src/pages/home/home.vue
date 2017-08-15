<template>
    <div class="container">
        <div class="home-item" @click="alert()">
            弹出框
        </div>
        <dialog-tip v-if="dialog.visible" @cancelDialog="dialog.visible = false" @dialogSure="dialog.visible = false" :title="dialog.title" :message="dialog.message" :visible="dialog.visible"></dialog-tip>

        <div class="home-item" @click="loadingShow()">
            Loading
        </div>
        <loading v-if="loading"></loading>

        <div class="home-item" @click="$router.push('button')">
            按钮
        </div>

        <div class="home-item" @click="$router.push('input')">
            表单
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            dialog: {
                visible: false,
                title: '提示',
                message: ''
            }
        };
    },

    methods: {
        alert() {
            this.dialog.visible = true;
            this.dialog.message = '好好好！';
        },

        loadingShow() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
</script>

<style scoped>
@import '../style/style.css';
</style>
