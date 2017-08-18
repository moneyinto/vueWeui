<template>
    <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" v-for="(item, index) in source.list" :key="index">
            <div class="weui-cell__hd">
                <input type="checkbox" class="weui-check" v-model="source.checked" :value="item.value">
                <span class="weui-icon-checked"></span>
            </div>
            <div class="weui-cell__bd">
                <span>{{ item.name }}</span>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        props: ['source']
    };
</script>

<style scoped>
@import '../input.css';
</style>
