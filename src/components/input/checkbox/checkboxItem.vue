<template>
    <label class="weui-cell weui-check__label">
        <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" v-model="source.checked" :value="value">
            <span class="weui-icon-checked"></span>
        </div>
        <div class="weui-cell__bd">
            <slot></slot>
        </div>
    </label>
</template>

<script>
    export default {
        props: ['source', 'value']
    };
</script>
