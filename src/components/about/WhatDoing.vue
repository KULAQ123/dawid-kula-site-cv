<template>
  <div class="what-doing-container">
    <div class="header-text"><h2>Czym się zajmuję?</h2></div>
    <div class="card-container">
      <ItemCard
        v-for="(item, index) in WhatDoingData"
        :key="index"
        :cardIcon="icons[item.cardIcon]"
        :cardTitle="item.cardTitle"
        :cardDescription="item.cardDescription"
        :blue="item.blue || false"
        :yellow="item.yellow || false"
        :green="item.green || false"
        :red="item.red || false"
        :violet="item.violet || false"
        minHeight="190px"
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

const icons = {
  faCode,
  faSwatchbook,
  faGears,
  faFile,
  faBook,
};
</script>

<style scoped>
.what-doing-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .header-text {
    display: flex;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-family: Poppins, sans-serif;
      font-size: 36px;
      font-weight: 500;
      line-height: 1em;
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
  }
}
</style>
