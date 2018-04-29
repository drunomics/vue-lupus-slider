<template>
  <swiper-slide>
    <slot/>
  </swiper-slide>
</template>
<script>
import {swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'lupus-slider-slide',
  components: {
    'swiper-slide': swiperSlide,
  }
}
</script>