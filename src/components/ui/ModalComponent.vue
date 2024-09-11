<template>
  <Teleport to="body">
    <div
      class="modal-overlay"
      :class="{ hidden }"
      @click="closeModal"
    >
      <div class="modal">
        <div class="modal-container">
          <div class="close-btn">
            <ButtonComponent @click.stop="closeModal"
              ><template #icon>
                <span class="gradient-icon">
                  <FontAwesomeIcon
                    :icon="faXmark"
                    class="icon"
                  /> </span></template
            ></ButtonComponent>
          </div>
          <div
            class="modal-content"
            @click.stop
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, onUnmounted } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(["close"]);
defineProps({
  hidden: Boolean,
});

function closeModal() {
  emit("close");
}

onMounted(() => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
</script>

<style lang="scss">
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;

  &.hidden {
    display: none;
  }

  .modal {
    max-width: 100%;
    width: 90dvw;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modal-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      z-index: 7;
      width: 100%;

      .close-btn {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 10px;
        z-index: 6;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      .modal-content {
        display: flex;
        justify-content: center;

        video {
          width: 100%;
          z-index: 10;
          max-height: calc(100dvh - 80px);
        }
      }
    }
  }
}

@include extra-small {
  .modal-overlay {
    background-color: #ffffff;

    .modal {
      width: 100%;
      height: 100%;
      max-height: 100%;
      padding: 10px 0;

      .modal-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .close-btn {
          padding: 15px;
          position: fixed;
          right: 0;
          top: 0;

          .icon-button {
            border: 2px solid black;
          }
        }
      }
    }
  }
}
</style>
