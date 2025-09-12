<template>
  <ModalComponent
    :is-open="isOpen"
    @close="closeModal"
  >
    <div class="article-container small-scroll">
      <div class="img-container">
        <img
          :src="project.image"
          alt="Project Image"
        />
      </div>
      <div class="article-description">
        <div class="article-title">
          <h2 class="heading-lg">{{ project.title }}</h2>
        </div>
        <p
          v-for="(paragraph, index) in project.mainDescription"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="gallery">
        <SwiperComponent
          :images="project.gallery"
          @open="openGalleryModal"
        />
      </div>
      <div class="article-description">
        <p
          v-for="(paragraph, index) in project.afterGalleryDescription"
          :key="'after-' + index"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </ModalComponent>
</template>

<script setup>
import SwiperComponent from "@/components/ui/SwiperComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { onMounted, onUnmounted } from "vue";

defineProps({
  isOpen: Boolean,
  project: Object,
});

const emit = defineEmits(["close"]);
const closeModal = () => emit("close");

onMounted(() => {
  document.documentElement.style.overflow = "hidden";
});

onUnmounted(() => {
  document.documentElement.style.overflow = "";
});
</script>

<style scoped lang="scss">
.modal-overlay {
  .modal-content {
    .article-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      //overflow-y: auto;
      flex: 1;
      padding: 40px 60px 40px 60px;

      .img-container {
        display: flex;
        justify-content: center;
        height: 500px;
        margin-top: 0;

        img {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          display: block;
        }
      }

      .article-description {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 40px;

        .article-title {
          margin-top: 24px;
          margin-bottom: 24px;
        }

        p {
          font-family: "Lora", serif;
        }
      }

      .gallery {
        display: flex;
        width: 60dvw;
        margin: auto;
        user-select: none;
        padding-top: 40px;
      }
    }
  }
}

@include medium-max {
}

@include small-max {
  .modal-overlay {
    .modal-content {
      .article-container {
        .img-container {
          height: 180px;
        }
        .article-description {
          padding: 30px 20px;
        }
        .gallery {
          width: 80dvw;
        }
      }
    }
  }
}
</style>
