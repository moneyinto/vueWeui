<template>
    <div class="weui-cells weui-cells_radio">
        <label class="weui-cell weui-check__label" v-for="(item, index) in source.list" :key="index">
            <div class="weui-cell__bd">
                <span>{{ item.name }}</span>
            </div>
            <div class="weui-cell__ft">
                <input type="radio" class="weui-check" :name="name || 'radio'" v-model="source.checked" :value="item.value">
                <span class="weui-icon-checked"></span>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        props: ['name', 'source']
    };
</script>

<style scoped>
@import './radio.css';
</style>
