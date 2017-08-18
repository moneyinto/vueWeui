<template>
    <textarea class="weui-textarea" :placeholder="placeholder" rows="3" v-model="value"></textarea>
</template>

<script>
    export default {
        props: ['placeholder', 'value']
    };
</script>

<style scoped>
.weui-textarea {
    display: block;
    border: 0;
    resize: none;
    width: 100%;
    color: inherit;
    font-size: 1.4em;
    line-height: inherit;
    outline: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
