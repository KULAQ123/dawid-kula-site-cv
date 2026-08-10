<template>
  <div class="portfolio-collection">
    <ArticleCard
      v-for="(project, index) in projects"
      :key="index"
      :img-link="project.image"
      :title="project.title"
      :subtitle="project.subtitle"
      :for-sale="project.forSale ?? false"
      :is-live="project.isLive ?? false"
      @click="openModal(project, index)"
    ></ArticleCard>
  </div>

  <ArticleModal
    v-if="selectedProject"
    :key="`article-${selectedProjectId}-${openCounter}`"
    v-model:is-open="isModalOpen"
    :project="selectedProject"
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
const selectedProjectId = ref(null);
const openCounter = ref(0);

const openModal = (project, projectId) => {
  selectedProject.value = project;
  selectedProjectId.value = projectId;
  isModalOpen.value = true;
  openCounter.value++;
};
</script>

<style scoped lang="scss">
.portfolio-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--gap-m);
}
</style>
