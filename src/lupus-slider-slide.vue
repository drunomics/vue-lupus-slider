<template>
  <swiper-slide>
    <slot/>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'lupus-slider-slide',
  components: {
    'swiper-slide': swiperSlide
  }
}
</script>

<style lang="scss">
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-invisible-blank-slide {
    visibility: hidden;
  }
</style>
