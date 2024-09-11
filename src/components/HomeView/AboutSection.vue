<template>
  <CardSection
    id="start"
    card-title="O mnie"
  >
    <AboutInformation></AboutInformation>
    <WhatDoing></WhatDoing>
  </CardSection>
</template>

<script setup>
import CardSection from "@/components/ui/CardSection.vue";
import AboutInformation from "@/components/about/AboutInformation.vue";
import WhatDoing from "@/components/about/WhatDoing.vue";
</script>

<style scoped></style>
