<template>
  <main>
    <ArticleSection></ArticleSection>
  </main>
</template>

<script setup>
import ArticleSection from "@/components/article/ArticleSection.vue";
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Portfolio projektów",
  description:
    "Projekty webowe i mobilne Dawida Kuli: sklepy e-commerce, aplikacje SaaS, systemy CMS. Część projektów dostępna na sprzedaż.",
  canonical: "https://dawidkula.pl/examples",
});
</script>

<style scoped></style>
