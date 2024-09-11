<template>
  <ExperienceContainer title="Edukacja">
    <template #icon
      ><FontAwesomeIcon
        :icon="faGraduationCap"
        class="color-blue"
    /></template>
    <template #content>
      <div class="experience-content">
        <ItemCard
          cardYears="2016-2019"
          cardHead="Technik Architektury Krajobrazu"
          cardDescription="Zespół Szkół Ogólnokształcących w Oleśnie"
          blue
          minHeight="120px"
        />
        <ItemCard
          cardYears="2019-2023"
          cardHead="Studia informatyczne"
          cardDescription="Politechnika Opolska"
          red
          minHeight="120px"
        />
      </div>
    </template>
  </ExperienceContainer>
  <ExperienceContainer title="Doświadczenie">
    <template #icon
      ><FontAwesomeIcon
        :icon="faSuitcase"
        class="color-red"
    /></template>
    <template #content>
      <div class="experience-content">
        <ItemCard
          cardYears="Wrzesień 2022"
          cardHead="Praktyka Tester/Frontend"
          cardDescription="Digital Holding Sp. z o.o."
          blue
          minHeight="120px"
        />
        <ItemCard
          cardYears="Kwiecień 2023 - Grudzień 2023"
          cardHead="Staż Frontend - Vue"
          cardDescription="Digital Holding Sp. z o.o."
          red
          minHeight="120px"
        />
        <ItemCard
          cardYears="Styczeń 2024 - Obecnie"
          cardHead="Junior Frontend Developer"
          cardDescription="Digital Holding Sp. z o.o."
          violet
          minHeight="120px"
        />
      </div>
    </template>
  </ExperienceContainer>
  <ExperienceContainer title="Kursy">
    <template #icon
      ><FontAwesomeIcon
        :icon="faAward"
        class="color-green"
    /></template>
    <template #content>
      <div class="experience-content">
        <ItemCard
          cardYears="Lipiec 2022"
          cardHead="Kurs Bootstrap 4 - od podstaw"
          cardDescription="Strefa kursów"
          blue
          minHeight="120px"
        />
        <ItemCard
          cardYears="Luty 2023"
          cardHead="Fundamenty programowania"
          cardDescription="Strefa kursów"
          red
          minHeight="120px"
        />
        <ItemCard
          cardYears="Marzec 2023"
          cardHead="Ekosystem JavaScript - wprowadzenie"
          cardDescription="Strefa kursów"
          violet
          minHeight="120px"
        />
      </div>
    </template>
  </ExperienceContainer>
</template>

<script setup>
import ItemCard from "@/components/ui/ItemCard.vue";
import {
  faGraduationCap,
  faSuitcase,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ExperienceContainer from "@/components/ui/ExperienceContainer.vue";
</script>

<style scoped lang="scss">
.experience-content {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
