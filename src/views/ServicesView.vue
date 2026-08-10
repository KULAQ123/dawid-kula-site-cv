<template>
  <main>
    <ServicesSection></ServicesSection>
  </main>
</template>

<script setup>
import ServicesSection from "@/components/services/ServicesSection.vue";
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Usługi",
  description:
    "Oferuję tworzenie aplikacji webowych i mobilnych w Vue 3 oraz Nuxt. Poznaj pełną ofertę usług.",
  canonical: "https://dawidkula.pl/services",
});
</script>

<style scoped></style>
