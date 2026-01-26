<template>
  <div class="experience-container">
    <ScrollAnimation
      animation-type="scale"
      :duration="500"
      :delay="100"
    >
      <div class="title-experience">
        <slot name="icon"></slot>
        <div class="text-xl">{{ title }}</div>
      </div>
    </ScrollAnimation>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import ScrollAnimation from "@/components/ScrollAnimation.vue";

defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
.experience-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .title-experience {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;

    .text-xl {
      font-size: 28px;
      font-weight: 500;
    }
  }
}
</style>
