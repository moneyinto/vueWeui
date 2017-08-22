<template>
    <vm-tabbar :source="tabbarList" selectedIndex="1" @tabTap="tabTap">
        <div class="p-v p-m">
            下面是内容
        </div>
    </vm-tabbar>
</template>

<script>
export default {
    data() {
        return {
            tabbarList: [
                {
                    name: '选项一',
                    default: './static/img/icon_tabbar.png',
                    active: './static/img/icon_tabbar.png'
                },

                {
                    name: '选项二',
                    default: './static/img/icon_tabbar.png',
                    active: './static/img/icon_tabbar.png'
                },

                {
                    name: '选项三',
                    default: './static/img/icon_tabbar.png',
                    active: './static/img/icon_tabbar.png'
                }
            ]
        };
    },

    methods: {
        tabTap(index) {
            alert(index);
        }
    }
};
</script>

<style>
@import '../style/style.css';
</style>
