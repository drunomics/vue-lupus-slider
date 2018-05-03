<template>
  <div class="lupus-slider">
    <swiper :options="swiperOptions" ref="lupusSlider">
      <slot/>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper} from 'vue-awesome-swiper';

export default {
  name: 'lupus-slider',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      }
    };
  },
  components: {
    'swiper': swiper,
  }
}
</script>

<style lang="scss">
  .lupus-slider {
    border: 1px solid darkgreen;
  }
</style>