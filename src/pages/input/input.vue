<template>
    <div class="container">
        <div class="m-b p-l">单选列表 {{ radioSource.checked }}</div>
        <vm-radio-list :source="radioSource"></vm-radio-list>

        <div class="m-b p-l m-t">自定义单选列表</div>
        <vm-custom-radio-list>
            <vm-radio-item name="customRadio" v-for="(item,index) in radioSource.list" :source="radioSource" :key="index" :value="item.value">
                {{ index + '.' + item.name }}
            </vm-radio-item>
        </vm-custom-radio-list>

        <div class="m-b p-l m-t">复选列表 {{ JSON.stringify(checkboxSource.checked) }}</div>
        <vm-checkbox-list :source="checkboxSource"></vm-checkbox-list>

        <div class="m-b p-l m-t">自定义复选列表</div>
        <vm-custom-checkbox-list>
            <vm-checkbox-item v-for="(item,index) in checkboxSource.list" :source="checkboxSource" :key="index" :value="item.value">
                {{ index + '.' + item.name }}
            </vm-checkbox-item>
        </vm-custom-checkbox-list>

        <vw-input class="m-t" placeholder="请输入"></vw-input>
        <vw-input class="m-t" placeholder="请输入" label="姓名"></vw-input>
        <vw-input class="m-t" placeholder="请输入" label="年龄" text-right></vw-input>
        <div class="m-t p-m">
            <div style="float: right;line-height: 30px">{{switchInput.checked}}</div>
            <vm-switch :checked="switchInput" @switchChange="switchChange()"></vm-switch>
        </div>

        <div class="m-t p-m bg-white p-v">
            <vm-textarea placeholder="请输入"></vm-textarea>
        </div>
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
            },

            switchInput: {
                checked: true
            }
        };
    },

    methods: {
        switchChange() {
            alert('switch change');
        }
    }
};
</script>

<style scoped>
@import '../style/style.css';

.container {
    padding: 20px 0;
}
</style>
