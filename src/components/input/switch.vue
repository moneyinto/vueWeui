<template>
    <label class="weui-switch-cp">
        <input class="weui-switch-cp__input" type="checkbox" value="1" v-model="checked.checked" @change="switchChange">
        <div class="weui-switch-cp__box"></div>
    </label>
</template>

<script>
export default {
    props: ['checked'],

    methods: {
        switchChange() {
            this.$emit('switchChange');
        }
    }
};
</script>

<style scoped>
.weui-switch-cp__box {
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #DFDFDF;
  -webkit-transition: background-color 0.1s, border 0.1s;
  transition: background-color 0.1s, border 0.1s;
}

.weui-switch-cp__box:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: #FDFDFD;
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}

.weui-switch-cp__box:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}

.weui-switch-cp__input:checked ~ .weui-switch-cp__box {
  border-color: #04BE02;
  background-color: #04BE02;
}

.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {
  -webkit-transform: scale(0);
          transform: scale(0);
}

.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {
  -webkit-transform: translateX(20px);
          transform: translateX(20px);
}

.weui-switch-cp__input {
  position: absolute;
  left: -9999px;
}

.weui-switch-cp__box {
  display: block;
}
</style>
