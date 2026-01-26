<template>
  <v-dialog
    :model-value="isOpen"
    class="modal-overlay"
    :max-width="maxWidth"
  >
    <div :class="cardClass">
      <v-card class="modal-content d-flex flex-column">
        <!-- Header -->
        <v-card-title
          class="modal-header d-flex pa-2"
          :class="{ 'justify-end': !title }"
        >
          <div
            v-if="title"
            class="modal-title"
          >
            <FontAwesomeIcon
              :icon="faCircleInfo"
              size="xl"
            />
            <div class="text-xl">Informacje</div>
          </div>
          <v-btn
            class="close-button"
            icon
            variant="text"
            @click="closeModal"
          >
            <FontAwesomeIcon :icon="faXmark" />
          </v-btn>
        </v-card-title>

        <!-- Body -->
        <v-card-text class="modal-body flex-grow-1 pa-4">
          <slot />
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

defineProps({
  isOpen: Boolean,
  title: String,
  cardClass: String,
  colorIcon: {
    type: String,
    default: "red",
  },
  maxWidth: {
    type: [String, Number],
    default: "1200",
  },
});

const emit = defineEmits(["close"]);
const closeModal = () => emit("close");
</script>

<style scoped lang="scss">
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);

  .v-overlay__content {
    align-items: center; /* Wyśrodkowanie modala */
  }

  .experience-modal {
    position: relative;
    display: flex;
    padding: 3px; // Grubość ramki
    border-radius: 24px;
    background: transparent; // Musi być transparent, by ramka nie "puchła"
    overflow: visible; // Zmieniamy na visible, aby poświata (glow) była widoczna poza kartą

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 24px;
      padding: 3px; // Grubość ramki neonowej

      // Intensywny neonowy gradient - fiolet połączony z błękitem dla lepszego efektu
      background: linear-gradient(
        135deg,
        #a855f7 0%,
        // Mocny fiolet
        rgba(168, 85, 247, 0.2) 40%,
        rgba(0, 212, 255, 0.2) 60%,
        #00d4ff 100% // Neonowy błękit
      );

      -webkit-mask-image:
        linear-gradient(white, white), linear-gradient(white, white);
      mask-image: linear-gradient(white, white), linear-gradient(white, white);
      -webkit-mask-clip: content, border;
      mask-clip: content-box, border-box;
      -webkit-mask-composite: source-out;
      mask-composite: exclude;
      filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
      pointer-events: none;
      z-index: 2;
    }

    .modal-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      // JASNE SZKŁO (Biało-szare)
      background: var(--color-radial-card);
      backdrop-filter: blur(15px) saturate(180%);
      -webkit-backdrop-filter: blur(15px) saturate(180%);

      border-radius: 22px; // O 2px mniej niż kontener
      z-index: 1;

      // Delikatny cień rzucany przez całą kartę
      box-shadow:
        0 10px 25px -5px rgba(0, 0, 0, 0.05),
        0 8px 10px -6px rgba(0, 0, 0, 0.05);

      .modal-header {
        padding: 15px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05); // Delikatna linia wewnątrz
        color: white;
      }

      .modal-body {
        padding: 20px !important;
        font-weight: 400;
      }
    }
  }

  .modal-content {
    height: 85dvh;

    .modal-header {
      display: flex;
      justify-content: space-between;
      padding: 10px;

      .modal-title {
        display: flex;
        align-items: center;
        gap: 10px;
        width: fit-content;
        margin-left: 10px;

        .text-xl {
          font-size: 28px;
          font-weight: 500;
        }
      }

      .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        opacity: 0.7;
      }
    }

    .modal-body {
      flex: 1;
      overflow-y: auto;
    }
  }
}

/* Responsywność */
@include small-max {
  .modal-overlay {
    .modal-content {
      height: 90dvh;

      .modal-header {
        .modal-title {
          .text-xl {
            font-size: 24px;
          }
        }

        .close-button {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
