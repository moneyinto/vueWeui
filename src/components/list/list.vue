<template>
    <div class="weui-cells">
        <a class="weui-cell" :class="arrow === 'true' && 'weui-cell_access'" href="javascript:;" v-for="(item,index) in source" :key="index">
            <div class="weui-cell__bd">
                <p>{{ item.name }}</p>
            </div>
            <span class="weui-cell__ft"></span>
        </a>
    </div>
</template>

<script>
export default {
    props: ['source', 'arrow']
};
</script>

<style scoped>
@import './list.css';
</style>
