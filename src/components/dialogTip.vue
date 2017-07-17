<template>
    <div class="js_dialog" v-if="visible">
        <div class="weui-mask"></div>
        <div class="weui-dialog dialog-fade-enter-active">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{ title }}</strong></div>
            <div class="weui-dialog__bd">{{ message }}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="dialogCancel">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="dialogSure">确认</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        dialogCancel() {
            this.$emit('cancelDialog');
        },

        dialogSure() {
            this.$emit('dialogSure');
        }
    },

    props: ['title', 'message', 'visible']
};
</script>

<style scoped>
    .dialog-fade-enter-active {
        animation: dialog-fade-in .8s
    }

    @keyframes dialog-fade-in {
        0% {
            transform: translate(-50%, -90%);
            opacity: 0
        }

        to {
            transform: translate(-50%, -70%);
            opacity: 1
        }
    }

    .weui-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .weui-dialog {
        position: fixed;
        z-index: 5000;
        width: 80%;
        max-width: 300px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -70%);
        transform: translate(-50%, -70%);
        background-color: #FFFFFF;
        text-align: center;
        border-radius: 3px;
        overflow: hidden;
    }

    @media screen and (min-width: 1024px) {
        .weui-dialog {
            width: 35%;
        }
    }

    .weui-dialog__hd {
        padding: 1.3em 1.6em 0.5em;
    }

    .weui-dialog__title {
        font-weight: 400;
        font-size: 18px;
    }

    .weui-dialog__bd {
        padding: 0 1.6em 0.8em;
        min-height: 40px;
        font-size: 15px;
        line-height: 1.3;
        word-wrap: break-word;
        word-break: break-all;
        color: #999999;
    }

    .weui-dialog__ft {
        position: relative;
        line-height: 48px;
        font-size: 18px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .weui-dialog__btn {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        color: #3CC51F;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
    }

    .weui-dialog__btn_default {
        color: #353535;
    }

    .weui-dialog__btn_primary {
        color: #0BB20C;
    }

    .weui-dialog__btn:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #D5D5D6;
        color: #D5D5D6;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }

    .weui-dialog__ft:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D5D5D6;
        color: #D5D5D6;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
</style>

