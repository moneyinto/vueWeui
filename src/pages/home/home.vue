<template>
    <div class="container">
        <div class="p-m p-v">
            <h2>VueWeUI</h2>
            <p class="text-grey">VueWeUI 闲来无事，将weui的样式使用vue组件化</p>
        </div>

        <div class="home-item" @click="alert()">
            弹出框
        </div>
        <vm-dialog-tip v-if="dialog.visible" @cancelDialog="dialog.visible = false" @dialogSure="dialog.visible = false" :title="dialog.title" :message="dialog.message" :visible="dialog.visible"></vm-dialog-tip>

        <div class="home-item" @click="loadingShow()">
            Loading
        </div>
        <vm-loading v-if="loading"></vm-loading>

        <div class="home-item" @click="$router.push('button')">
            按钮
        </div>

        <div class="home-item" @click="$router.push('input')">
            表单
        </div>

        <div class="home-item" @click="$router.push('list')">
            列表
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
