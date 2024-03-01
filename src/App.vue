<template>
  <HeaderComponent></HeaderComponent>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <FooterComponent></FooterComponent>
<!--  <BackToTopButton></BackToTopButton>-->
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BackToTopButton from "@/components/BackToTopButton.vue";
</script>
