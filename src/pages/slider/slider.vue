<template>
    <div class="container">
        <div class="m-b">Slider {{ slider.value}}</div>
        <vm-slider :slider="slider"></vm-slider>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider: {
                value: 0
            }
        };
    }
};
</script>

<style>
@import '../style/style.css';
</style>
