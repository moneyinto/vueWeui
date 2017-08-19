<template>
    <div class="weui-cell" :class="arrow === 'true' && 'weui-cell_access'" @click="itemClick()">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['arrow'],

        methods: {
            itemClick() {
                this.$emit('itemClick');
            }
        }
    };
</script>
