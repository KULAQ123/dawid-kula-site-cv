<template>
  <div
    class="modal-overlay"
    @click="closeModal"
  >
    <div
      class="modal-content"
      @click.stop
    >
      <div class="modal-header">
        <button
          class="close-button"
          @click="closeModal"
        >
          <FontAwesomeIcon :icon="faXmark" />
        </button>
      </div>
      <div class="article-container small-scroll">
        <div class="img-container">
          <img
            :src="project.image"
            alt="Project Image"
          />
        </div>
        <div class="article-description">
          <h2>{{ project.title }}</h2>
          <p>{{ project.mainDescription.part1 }}</p>
          <p>{{ project.mainDescription.part2 }}</p>
        </div>
        <div class="gallery">
          <SwiperComponent :images="project.gallery"></SwiperComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwiperComponent from "@/components/ui/SwiperComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

defineProps({
  isOpen: Boolean,
  project: Object,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    width: 95%;
    max-width: 1080px;
    max-height: 90dvh; /* Maksymalna wysokość modala */
    border-radius: 8px;
    overflow: hidden; /* Ukryj nadmiar zawartości */
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

    .modal-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        opacity: 0.5;
        padding-right: 20px;
      }
    }

    .article-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 60px;
      overflow-y: auto;
      flex: 1;

      .img-container {
        display: flex;
        height: 500px;
        margin-top: 0;

        img {
          width: 100%;
        }
      }

      .article-description {
        margin-left: auto;
        margin-right: auto;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .gallery {
        display: flex;
        width: 100%;
        margin: auto;
      }
    }
  }
}
</style>
