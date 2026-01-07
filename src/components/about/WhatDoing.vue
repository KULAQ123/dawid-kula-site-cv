<template>
  <div class="what-doing-container">
    <ScrollAnimation
      animation-type="slide-left"
      :duration="500"
      :delay="100"
    >
      <div class="header-text"><h2>Czym się zajmuję?</h2></div>
    </ScrollAnimation>
    <div class="card-container">
      <ItemCard
        v-for="(item, index) in WhatDoingData"
        :key="index"
        :card-icon="icons[item.cardIcon]"
        :card-title="item.cardTitle"
        :card-description="item.cardDescription"
        :blue="item.blue || false"
        :yellow="item.yellow || false"
        :green="item.green || false"
        :red="item.red || false"
        :violet="item.violet || false"
        min-height="190px"
      ></ItemCard>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "@/components/ui/ItemCard.vue";
import {
  faSwatchbook,
  faCode,
  faFile,
  faGears,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { WhatDoingData } from "@/enums/WhatDoing";
import ScrollAnimation from "@/components/ScrollAnimation.vue";

const icons = {
  faCode,
  faSwatchbook,
  faGears,
  faFile,
  faBook,
};
</script>

<style scoped lang="scss">
.what-doing-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .header-text {
    display: flex;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 32px;
      font-weight: 500;
      line-height: 1.2em;
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: var(--gap-m);
  }
}

@media (max-width: 1000px) {
  .what-doing-container {
    .card-container {
    }
  }
}

@media (max-width: 850px) {
  .what-doing-container {
    .card-container {
      flex-direction: column;
    }
  }
}
</style>
