<template>
  <div
    class="item-container"
    :class="{
      'bg-item-blue': blue,
      'bg-item-yellow': yellow,
      'bg-item-green': green,
      'bg-item-red': red,
      'bg-item-violet': violet,
    }"
    :style="{ 'min-height': minHeight }"
  >
    <FontAwesomeIcon
      v-if="cardIcon"
      :icon="cardIcon"
      class="icon"
      :class="{
        'color-icon-blue': blue,
        'color-icon-yellow': yellow,
        'color-icon-green': green,
        'color-icon-red': red,
        'color-icon-violet': violet,
      }"
    />
    <div class="item-text">
      <div
        v-if="cardYears"
        class="text-sm color-gray"
      >
        {{ cardYears }}
      </div>
      <h2
        v-if="cardTitle"
        class="heading-sm"
      >
        {{ cardTitle }}
      </h2>
      <div class="item-description">
        <span
          v-if="cardHead"
          class="text-lg"
        >
          {{ cardHead }}
        </span>
        <p>{{ cardDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  cardIcon: Object,
  cardYears: String,
  cardTitle: String,
  cardDescription: String,
  cardHead: String,
  minHeight: String,
  blue: Boolean,
  yellow: Boolean,
  green: Boolean,
  red: Boolean,
  violet: Boolean,
});
</script>

<style scoped lang="scss">
.item-container {
  display: flex;
  border-radius: 20px;
  padding: 20px;
  width: calc(33.33% - 20px);
  max-height: 190px;
  box-shadow: var(--shadow-2);

  .item-text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item-description {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        color: var(--color-gray-100);
      }
    }
  }

  .icon {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  &.bg-item-blue {
    background-color: var(--color-lightblue);

    .color-icon-blue {
      color: var(--color-blue);
    }
  }

  &.bg-item-yellow {
    background-color: var(--color-lightyellow);

    .color-icon-yellow {
      color: var(--color-yellow);
    }
  }

  &.bg-item-violet {
    background-color: var(--color-lightviolet);

    .color-icon-violet {
      color: var(--color-violet);
    }
  }

  &.bg-item-red {
    background-color: var(--color-lightred);

    .color-icon-red {
      color: var(--color-red);
    }
  }

  &.bg-item-green {
    background-color: var(--color-lightgreen);

    .color-icon-green {
      color: var(--color-green);
    }
  }

  &.bg-item-orange {
    background-color: var(--color-lightorange);

    .color-icon-orange {
      color: var(--color-orange);
    }
  }
}
</style>
