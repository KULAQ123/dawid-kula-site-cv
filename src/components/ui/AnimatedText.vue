<template>
  <h5 class="animated-subtitle heading-md">
    <span>{{ currentText }}</span>
    <span
      class="typed-cursor typed-cursor--blink"
      aria-hidden="true"
      >|</span
    >
  </h5>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
});

const currentText = ref("");
const typingSpeed = 100; // Szybkość pisania
const deletingSpeed = 50; // Szybkość usuwania
const pauseTime = 4000; // Pauza przed usunięciem

let currentIndex = 0;
let isDeleting = false;

const typeEffect = async () => {
  const fullText = props.texts[currentIndex];

  if (!isDeleting) {
    currentText.value = fullText.substring(0, currentText.value.length + 1);

    if (currentText.value === fullText) {
      // Jeśli pełny tekst został napisany, czekaj
      isDeleting = true;
      await new Promise((resolve) => setTimeout(resolve, pauseTime));
    }
  } else {
    // Usuwanie tekstu
    currentText.value = fullText.substring(0, currentText.value.length - 1);

    if (currentText.value === "") {
      // Jeśli tekst został usunięty, przejdź do kolejnego tekstu
      isDeleting = false;
      currentIndex = (currentIndex + 1) % props.texts.length; // Przechodzenie w pętli
    }
  }

  // Wywołuj rekurencyjnie z odpowiednią prędkością
  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
};

onMounted(() => {
  typeEffect(); // Uruchom efekt po zamontowaniu komponentu
});
</script>

<style scoped lang="scss">
.animated-subtitle {
  .typed-cursor {
    display: inline-block;
    animation: blink 0.8s step-end infinite;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
