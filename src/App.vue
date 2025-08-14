<template>
  <HeaderComponent></HeaderComponent>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <!--  <BackToTopButton></BackToTopButton>-->
  <!--  <FloatingServicesButton></FloatingServicesButton>-->
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
// import FloatingServicesButton from "@/components/FloatingServicesButton.vue"; Przycisk usług
// import FooterComponent from "@/components/FooterComponent.vue";
// import BackToTopButton from "@/components/BackToTopButton.vue";
</script>
