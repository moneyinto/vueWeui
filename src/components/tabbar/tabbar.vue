<template>
    <div class="page">
        <slot></slot>
        <div class="weui-tabbar">
            <a href="javascript:;" class="weui-tabbar__item" v-for="(item,index) in source" :key="index" :class="Number(selectedIndex) === index && 'weui-bar__item_on'" @click="tabbarTap(index)">
                <span style="display: inline-block;position: relative;">
                    <img :src="Number(selectedIndex) === index ? item.default : item.active" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                </span>
                <p class="weui-tabbar__label">{{ item.name }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['source', 'selectedIndex'],
    methods: {
        tabbarTap(index) {
            if (Number(this.selectedIndex) === index) return;
            this.selectedIndex = index;
            this.$emit('tabTap', index);
        }
    }
};
</script>

<style scoped>
@import './tabbar.css';
</style>
