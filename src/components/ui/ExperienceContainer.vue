<template>
  <div class="experience-container">
    <div class="title-experience">
      <slot name="icon"></slot>
      <div class="text-xl">{{ title }}</div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

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
  }
}
</style>
