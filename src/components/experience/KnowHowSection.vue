<template>
  <div class="know-how-container">
    <div class="skill-column">
      <SkillBar
        v-for="(skill, index) in leftSkills"
        :key="index"
        :skillName="skill.skillName"
        :percentage="skill.skillPercent"
        :skillColor="skill.skillColor"
      />
    </div>
    <div class="skill-column">
      <SkillBar
        v-for="(skill, index) in rightSkills"
        :key="index"
        :skillName="skill.skillName"
        :percentage="skill.skillPercent"
        :skillColor="skill.skillColor"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import SkillBar from "@/components/ui/SkillBar.vue";
import { SkillsPercentData } from "@/enums/SkillsPercent";

const middleIndex = Math.ceil(SkillsPercentData.length / 2);
const leftSkills = computed(() => SkillsPercentData.slice(0, middleIndex));
const rightSkills = computed(() => SkillsPercentData.slice(middleIndex));
</script>

<style scoped lang="scss">
.know-how-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  .skill-column {
    width: 50%;
  }
}

@media (max-width: 850px) {
  .know-how-container {
    flex-direction: column;
    gap: unset;

    .skill-column {
      width: 100%;
    }
  }
}
</style>
