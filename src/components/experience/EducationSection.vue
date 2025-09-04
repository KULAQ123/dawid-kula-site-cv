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
          :card-years="item.years"
          :card-head="item.title"
          :card-description="item.description"
          :min-height="'120px'"
          :blue="item.color === 'blue'"
          :yellow="item.color === 'yellow'"
          :green="item.color === 'green'"
          :red="item.color === 'red'"
          :violet="item.color === 'violet'"
        />
      </div>
    </template>
  </ExperienceContainer>
</template>

<script setup>
import ItemCard from "@/components/ui/ItemCard.vue";
import ExperienceContainer from "@/components/ui/ExperienceContainer.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGraduationCap,
  faSuitcase,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { ExperienceData } from "@/enums/ExperienceInformation";

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
