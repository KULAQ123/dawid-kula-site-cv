<template>
  <div
    class="skill-bar"
    ref="skillBarElement"
  >
    <div class="label">
      <span class="text-lg">{{ skillName }}</span>
      <span class="text-lg">{{ percentage }}%</span>
    </div>
    <div class="bar-container">
      <div
        class="bar-fill"
        :style="{ width: percentage + '%', backgroundColor: skillColor }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  skillName: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100,
  },
  skillColor: {
    type: String,
    required: true,
  },
});

const skillBarElement = ref(null);
const animatedPercentage = ref(0);

// Funkcja uruchamiająca animację, kiedy pasek postępu pojawi się na ekranie
const handleIntersection = (entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    // Uruchom animację - od 0 do wartości `percentage`
    let start = 0;
    const end = entry.target.dataset.percentage;
    const duration = 1000;
    const stepTime = 15; // co ile ms zmieniać wartość
    const step = (end - start) / (duration / stepTime);

    const interval = setInterval(() => {
      if (start < end) {
        start += step;
        animatedPercentage.value = Math.min(start, end);
      } else {
        clearInterval(interval);
      }
    }, stepTime);
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  if (skillBarElement.value) {
    skillBarElement.value.dataset.percentage = props.percentage;
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
      transition: width 0.5s ease-in-out;
    }
  }
}
</style>
