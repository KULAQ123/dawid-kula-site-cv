<template>
  <div class="portfolio-collection">
    <ArticleCard
      v-for="(project, index) in projects"
      :key="index"
      :imgLink="project.image"
      :title="project.title"
      :subtitle="project.subtitle"
      @click="openModal(project)"
    ></ArticleCard>
  </div>

  <ArticleModal
    v-if="isModalOpen"
    :isOpen="isModalOpen"
    :project="selectedProject"
    @close="closeModal"
  />
</template>

<script setup>
import ArticlesEnum from "@/enums/ArticleData";
import ArticleCard from "@/components/ui/ArticleCard.vue";
import ArticleModal from "@/components/ArticleModal.vue";
import { ref } from "vue";

const projects = Object.values(ArticlesEnum);
const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};
</script>

<style scoped lang="scss">
.portfolio-collection {
  display: flex;
  gap: var(--gap-m);
}
</style>
