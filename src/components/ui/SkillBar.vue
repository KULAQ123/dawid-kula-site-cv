<template>
  <div
    ref="skillBarElement"
    class="skill-bar"
  >
    <div class="label">
      <span class="text-lg color-gray">{{ skillName }}</span>
      <span class="text-lg color-gray">{{ percentage }}%</span>
    </div>
    <div class="bar-container">
      <div
        class="bar-fill"
        :style="{
          width: animatedPercentage + '%',
          backgroundColor: skillColor,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  skillName: String,
  percentage: Number,
  skillColor: String,
});

const skillBarElement = ref(null);
const animatedPercentage = ref(0);
let hasAnimated = false;

const handleIntersection = (entries) => {
  const entry = entries[0];
  if (entry.isIntersecting && !hasAnimated) {
    hasAnimated = true;

    let startTimestamp = null;
    const duration = 3000; // czas trwania animacji w ms
    const startValue = 0;
    const endValue = props.percentage;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easing (płynne przyspieszenie i zwolnienie)
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      animatedPercentage.value = startValue + (endValue - startValue) * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  if (skillBarElement.value) {
    observer.observe(skillBarElement.value);
  }
});
</script>

<style scoped lang="scss">
.skill-bar {
  //margin-bottom: 1rem;
  font-family: Arial, sans-serif;
  margin-bottom: 30px;

  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .bar-container {
    width: 100%;
    height: 6px;
    background-color: #e6e6e6;
    border-radius: 10px;
    overflow: hidden;

    .bar-fill {
      height: 100%;
      border-radius: 10px 0 0 10px;
      //transition: width 0.5s ease-in-out;
      transition: width 0.1s linear;
    }
  }
}
@include medium-max {
}

@include small-max {
}
</style>
