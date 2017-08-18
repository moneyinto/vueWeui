<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__hd" v-if="label">
                <label class="weui-label">{{ label }}</label>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" :placeholder="placeholder" v-model="value">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'placeholder', 'label']
};
</script>

<style>
@import './input.css';
</style>
