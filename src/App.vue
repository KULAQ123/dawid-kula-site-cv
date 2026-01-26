<template>
  <HeaderComponent></HeaderComponent>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <FloatingServicesButton></FloatingServicesButton>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FloatingServicesButton from "@/components/FloatingServicesButton.vue"; //Przycisk usług
</script>
