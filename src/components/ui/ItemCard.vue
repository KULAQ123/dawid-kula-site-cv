<template>
  <ScrollAnimation
    animation-type="slide-bottom"
    :duration="500"
    :delay="100"
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
  </ScrollAnimation>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ScrollAnimation from "@/components/ScrollAnimation.vue";

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
.scroll-animation {
  display: flex;
  max-width: calc(33.33% - 20px);
}

.item-container {
  display: flex;
  border-radius: 20px;
  padding: 20px;
  flex: 1 1 calc(33.33% - var(--gap-m));
  max-width: calc(33.33% - 20px);
  max-height: 100%;
  box-shadow: var(--shadow-2);

  .item-text {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);

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
    margin-right: 15px;
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

@include medium-max {
  .item-container {
    flex: 1 1 calc(50% - var(--gap-m)); /* 50% szerokości */
    max-width: calc(50% - 20px);

    .card-container {
    }
  }
}

@include small-max {
  .item-container {
    flex: 1 1 100%;
    max-width: 100%;

    .card-container {
      flex-direction: column;
    }

    .icon {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
  }
}
</style>
