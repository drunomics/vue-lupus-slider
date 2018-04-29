<template>
  <div class="lupus-slider">
    <swiper>
      <slot/>
    </swiper>
  </div>
</template>

<script>
import {swiper} from 'vue-awesome-swiper';

export default {
  name: 'lupus-slider',
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