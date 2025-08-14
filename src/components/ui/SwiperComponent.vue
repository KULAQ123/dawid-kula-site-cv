<!-- SwiperComponent.vue -->
<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slides-per-view="1"
    :space-between="20"
    navigation
    pagination
    autoplay
    loop
    class="my-swiper"
  >
    <swiper-slide
      v-for="(image, index) in images"
      :key="index"
    >
      <img
        :src="image"
        alt="Gallery Image"
        class="swiper-image"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.my-swiper {
  width: 100%;
  height: 400px;

  .swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
