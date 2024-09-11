<template>
  <div
    class="modal-overlay"
    @click="closeModal"
  >
    <div
      class="modal-content"
      @click.stop
    >
      <button
        class="close-button"
        @click="closeModal"
      >
        Zamknij
      </button>
      <video
        controls
        :src="props.videoSrc"
        class="video-player"
      ></video>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  videoSrc: {
    type: String,
  },
});

const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--color-2);
}

.video-player {
  width: 100%;
  height: auto;
}
</style>
