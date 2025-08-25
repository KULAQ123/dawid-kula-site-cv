<template>
  <div
    v-if="isOpen"
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
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);
const closeModal = () => emit("close");
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    max-width: 1080px;
    max-height: 90dvh;
    width: 95%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    opacity: 0.7;
  }

  .modal-body {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
