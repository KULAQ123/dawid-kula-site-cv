<template>
  <div
    v-motion="animationConfig"
    class="motion-container"
  >
    <slot />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

// Props dla konfiguracji animacji
const props = defineProps({
  animationType: {
    type: String,
    default: "fade", // Domyślna animacja to pojawienie się
    validator: (value) =>
      ["fade", "slide-left", "slide-right", "slide-bottom", "scale"].includes(
        value,
      ),
  },
  duration: {
    type: Number,
    default: 800, // Czas trwania animacji w milisekundach
  },
  delay: {
    type: Number,
    default: 200, // Opóźnienie animacji w milisekundach
  },
});

// Konfiguracja animacji jako computed property
const animationConfig = computed(() => {
  switch (props.animationType) {
    case "fade":
      return {
        initial: { opacity: 0 },
        enter: {
          opacity: 1,
          transition: { duration: props.duration, delay: props.delay },
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
      };
    case "slide-left":
      return {
        initial: { opacity: 0, x: -100 },
        visibleOnce: {
          opacity: 1,
          x: 0,
          transition: { duration: props.duration, delay: props.delay },
        },
      };
    case "slide-right":
      return {
        initial: { opacity: 0, x: 100 },
        visibleOnce: {
          opacity: 1,
          x: 0,
          transition: { duration: props.duration, delay: props.delay },
        },
      };
    case "slide-bottom":
      return {
        initial: { opacity: 0, y: 100 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: props.duration, delay: props.delay },
        },
      };
    case "scale":
      return {
        initial: { opacity: 0, scale: 0.5 },
        visibleOnce: {
          opacity: 1,
          scale: 1,
          transition: { duration: props.duration, delay: props.delay },
        },
      };
    default:
      return {
        initial: { opacity: 0 },
        visibleOnce: {
          opacity: 1,
          transition: { duration: props.duration, delay: props.delay },
        },
      };
  }
});
</script>

<style scoped>
.motion-container {
  display: inline-block;
  overflow: hidden;
  width: fit-content;
}
</style>
