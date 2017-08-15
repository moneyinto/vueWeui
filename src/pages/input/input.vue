<template>
    <div class="container">
        <div class="m-b p-l">单选列表 {{ radioSource.checked }}</div>
        <radio-list :source="radioSource"></radio-list>

        <div class="m-b p-l m-t">自定义单选列表</div>
        <custom-radio-list>
            <radio-item name="customRadio" v-for="(item,index) in radioSource.list" :source="radioSource" :key="index" :value="item.value">
                {{ index + '.' + item.name }}
            </radio-item>
        </custom-radio-list>

        <div class="m-b p-l m-t">复选列表 {{ JSON.stringify(checkboxSource.checked) }}</div>
        <checkbox-list :source="checkboxSource"></checkbox-list>

        <div class="m-b p-l m-t">自定义复选列表</div>
        <custom-checkbox-list>
            <checkbox-item v-for="(item,index) in checkboxSource.list" :source="checkboxSource" :key="index" :value="item.value">
                {{ index + '.' + item.name }}
            </checkbox-item>
        </custom-checkbox-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radioSource: {
                checked: 1,
                list: [
                    {
                        name: 'radio one',
                        value: 1
                    },

                    {
                        name: 'radio two',
                        value: 2
                    },

                    {
                        name: 'radio three',
                        value: 3
                    }
                ]
            },

            checkboxSource: {
                checked: [],
                list: [
                    {
                        name: 'checkbox one',
                        value: 1
                    },

                    {
                        name: 'checkbox two',
                        value: 2
                    },

                    {
                        name: 'checkbox three',
                        value: 3
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>
@import '../style/style.css';

.container {
    padding: 20px 0;
}
</style>
