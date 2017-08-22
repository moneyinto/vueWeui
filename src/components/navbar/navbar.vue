<template>
    <div class="page">
        <div class="weui-navbar">
            <div class="weui-navbar__item" v-for="(item,index) in source" :key="index" :class="Number(selectedIndex) === index && 'weui-bar__item_on'" @click="navbarTap(index)">
                {{ item.name }}
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['source', 'selectedIndex'],
    methods: {
        navbarTap(index) {
            if (Number(this.selectedIndex) === index) return;
            this.selectedIndex = index;
            this.$emit('navTap', index);
        }
    }
};
</script>

<style scoped>
@import './navbar.css';
</style>
