<template>
    <label class="weui-cell weui-check__label">
        <div class="weui-cell__bd">
            <slot></slot>
        </div>
        <div class="weui-cell__ft">
            <input type="radio" class="weui-check" :name="name || 'radio'" v-model="source.checked" :value="value">
            <span class="weui-icon-checked"></span>
        </div>
    </label>
</template>

<script>
    export default {
        props: ['name', 'source', 'value']
    };
</script>
