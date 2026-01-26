<template>
  <ExperienceContainer
    v-for="(experience, key) in ExperienceData"
    :key="key"
    :title="experience.title"
  >
    <template #icon>
      <FontAwesomeIcon
        :icon="icons[experience.icon]"
        :class="`color-${experience.color}`"
      />
    </template>

    <template #content>
      <div class="experience-content">
        <ItemCard
          v-for="(item, idx) in experience.ExperienceContent"
          :key="idx"
          v-ripple
          :card-years="item.years"
          :card-head="item.title"
          :card-description="item.description"
          :min-height="'120px'"
          :blue="item.color === 'blue'"
          :yellow="item.color === 'yellow'"
          :green="item.color === 'green'"
          :red="item.color === 'red'"
          :violet="item.color === 'violet'"
          class="cursor-pointer"
          @click="openExperienceModal(item, experience, `${key}-${idx}`)"
        />
      </div>
    </template>
  </ExperienceContainer>

  <!-- JEDEN MODAL z kluczem: ID karty + licznik otwarć -->
  <ExperienceModal
    v-if="selectedItem"
    :key="`${selectedItemId}-${openCounter}`"
    v-model:is-open="isModalOpen"
    :item="selectedItem"
    :experience="selectedExperience"
  />
</template>

<script setup>
import { ref } from "vue";
import ItemCard from "@/components/ui/ItemCard.vue";
import ExperienceContainer from "@/components/ui/ExperienceContainer.vue";
import ExperienceModal from "@/components/ExperienceModal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGraduationCap,
  faSuitcase,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { ExperienceData } from "@/enums/ExperienceInformation";

const isModalOpen = ref(false);
const selectedItem = ref(null);
const selectedExperience = ref(null);
const selectedItemId = ref(null);
const openCounter = ref(0);

const openExperienceModal = (item, experience, itemId) => {
  selectedItem.value = item;
  selectedExperience.value = experience;
  selectedItemId.value = itemId;
  isModalOpen.value = true;
  openCounter.value++; // Zwiększamy przy każdym otwarciu
};

const icons = {
  faGraduationCap,
  faSuitcase,
  faAward,
};
</script>

<style scoped lang="scss">
.experience-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--gap-m);
}
</style>
