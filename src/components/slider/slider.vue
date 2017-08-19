<template>
    <div class="weui-slider-box">
        <div class="weui-slider">
            <div class="weui-slider__inner" ref="sliderInner">
                <div ref="sliderTrack" :style="{ width: slider.value + '%' }" class="weui-slider__track"></div>
                <div ref="sliderHandler" :style="{ left: slider.value + '%' }" class="weui-slider__handler"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['slider'],

    mounted() {
        let totalLen = this.$refs.sliderInner.clientWidth;
        let startLeft = 0;
        let startX = 0;
        let sliderHandler = this.$refs.sliderHandler;
        let vm = this;

        sliderHandler.addEventListener('touchstart', e => {
            startLeft = parseInt(sliderHandler.style.left.replace(/px/, '')) * totalLen / 100;
            startX = e.changedTouches[0].clientX;
        });

        sliderHandler.addEventListener('touchmove', e => {
            let dist = startLeft + e.changedTouches[0].clientX - startX;
            let percent = 0;
            dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
            percent = parseInt(dist / totalLen * 100);
            vm.slider.value = percent;
            e.preventDefault();
        });
    }
};
</script>

<style scoped>
    @import './slider.css';
</style>
