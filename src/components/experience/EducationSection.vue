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
          card-years="2016-2019"
          card-head="Technik Architektury Krajobrazu"
          card-description="Zespół Szkół Ogólnokształcących w Oleśnie"
          blue
          min-height="120px"
        />
        <ItemCard
          card-years="2019-2023"
          card-head="Studia informatyczne"
          card-description="Politechnika Opolska"
          red
          min-height="120px"
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
          card-years="Wrzesień 2022"
          card-head="Praktyka Tester/Frontend"
          card-description="Digital Holding Sp. z o.o."
          blue
          min-height="120px"
        />
        <ItemCard
          card-years="Kwiecień 2023 - Grudzień 2023"
          card-head="Staż Frontend - Vue"
          card-description="Digital Holding Sp. z o.o."
          red
          min-height="120px"
        />
        <ItemCard
          card-years="Styczeń 2024 - Obecnie"
          card-head="Junior Frontend Developer"
          card-description="Digital Holding Sp. z o.o."
          violet
          min-height="120px"
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
          card-years="Lipiec 2022"
          card-head="Kurs Bootstrap 4 - od podstaw"
          card-description="Strefa kursów"
          blue
          min-height="120px"
        />
        <ItemCard
          card-years="Luty 2023"
          card-head="Fundamenty programowania"
          card-description="Strefa kursów"
          red
          min-height="120px"
        />
        <ItemCard
          card-years="Marzec 2023"
          card-head="Ekosystem JavaScript - wprowadzenie"
          card-description="Strefa kursów"
          violet
          min-height="120px"
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
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--gap-m);
}
</style>
