<template>
  <ModalComponent
    :is-open="isOpen"
    :max-width="600"
    :title="experience?.title"
    :color-icon="experience?.color"
    card-class="experience-modal"
    @close="$emit('update:isOpen', false)"
  >
    <div class="experience-content">
      <div class="experience-header">
        <div class="years">
          <FontAwesomeIcon :icon="faCalendarDay" /> {{ item?.years }}
        </div>
        <h2 class="title-h2">{{ item?.title }}</h2>
        <div class="company">
          <FontAwesomeIcon :icon="faGlobe" /> {{ item?.description }}
        </div>
      </div>
      <p><span>Opis stanowiska: </span>{{ item?.jobDescription }}</p>
    </div>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from "@/components/ModalComponent.vue";
import { faCalendarDay, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  isOpen: Boolean,
  item: Object,
  experience: Object,
});

defineEmits(["update:isOpen"]);
</script>

<style scoped lang="scss">
.experience-content {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 40px;

  @include small-max {
    padding: 0;
  }

  .experience-header {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .years {
      font-size: 14px;
      color: var(--color-second-text-card);
      margin-bottom: 10px;
    }

    .title-h2 {
      font-size: 24px;
      font-weight: 600;
      color: var(--color-4);

      @include small-max {
        font-size: 20px;
      }
    }

    .company {
      font-size: 18px;
      font-weight: 500;
      color: var(--color-second-text-card);

      @include small-max {
        font-size: 16px;
      }
    }
  }

  p {
    color: var(--color-2);

    span {
      color: var(--white);
      font-weight: 600;
    }
  }
}
</style>
