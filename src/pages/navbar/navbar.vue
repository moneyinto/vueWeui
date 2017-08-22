<template>
    <vm-navbar :source="navbarList" selectedIndex="1" @navTap="navTap">
        <div class="p-v p-m">
            下面是内容
        </div>
    </vm-navbar>
</template>

<script>
export default {
    data() {
        return {
            navbarList: [
                {
                    name: '选项一'
                },

                {
                    name: '选项二'
                },

                {
                    name: '选项三'
                }
            ]
        };
    },

    methods: {
        navTap(index) {
            alert(index);
        }
    }
};
</script>

<style>
@import '../style/style.css';
</style>
