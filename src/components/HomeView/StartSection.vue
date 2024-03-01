<template>
  <section class="home-banner">
<!--    <div class="background-gradient"></div>-->
    <div class="content">
      <div class="home-container">

      </div>
<!--      <div class="text-container">-->
<!--        <h1>Witaj na mojej stronie O mnie</h1>-->
<!--        <h3>Proszę kliknij poniższy przycisk aby wyświetlić modal</h3>-->
<!--      </div>-->
<!--      <div class="button-container">-->
<!--        <ButtonComponent-->
<!--          text="Wyświetl modal"-->
<!--          :radius="true"-->
<!--          @click="openModal"-->
<!--        ></ButtonComponent>-->
<!--        <VideoModal-->
<!--          v-if="isModalOpen"-->
<!--          @close="closeModal"-->
<!--          video-src="https://media.istockphoto.com/id/699585396/pl/filmy/krajobraz-przejrzystego-strumienia.mp4?s=mp4-640x640-is&k=20&c=W8iTWdr6z0MaGvvmTRj9PeVQApwfPVLwvyxRHkZdMko="-->
<!--        ></VideoModal>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import VideoModal from "@/components/VideoModal.vue";

import { ref } from "vue";
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.home-banner {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 700px;
  position: relative;

  .background-gradient {
    position: absolute;
    top: 0;
    right: 150px;
    width: 400px;
    height: 400px;
    color: red;
    z-index: 4;
  }

  .content {
    display: flex;
    align-items: center;
    z-index: 3;
    height: 600px;

    .home-container {
      width: 100%;
      padding: 20px 90px;
      height: 100%;
      background-color: white;
      border-radius: 20px;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      color: var(--color-2);
      margin-right: 50px;
      max-width: 720px;

      h1 {
        margin: 0 0 30px 0;
        font-size: 5.4rem;
        line-height: 1.3;
      }

      h3 {
        font-size: 3.2rem;
      }
    }
  }
}
</style>
