<template>
  <ModalComponent
    :is-open="isOpen"
    @close="$emit('update:isOpen', false)"
  >
    <div class="article-container small-scroll">
      <div class="img-container">
        <img
          :src="project?.image"
          alt="Project Image"
        />
      </div>
      <div class="article-description">
        <div class="article-title">
          <h2 class="heading-lg">{{ project?.title }}</h2>

          <a
            v-if="project?.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="visit-button"
          >
            Zobacz projekt online
            <i class="external-icon">↗</i>
          </a>
        </div>
        <div
          v-if="project.price"
          class="project-price"
        >
          <span class="project-price__label">Cena projektu</span>
          <span class="project-price__value">{{ project.price }}</span>
        </div>
        <p
          v-for="(paragraph, index) in project?.mainDescription"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="gallery">
        <SwiperComponent :images="project?.gallery" />
      </div>
      <div class="article-description">
        <p
          v-for="(paragraph, index) in project?.afterGalleryDescription"
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

defineProps({
  isOpen: Boolean,
  project: Object,
});

defineEmits(["update:isOpen"]);
</script>

<style scoped lang="scss">
.modal-overlay {
  .modal-content {
    .article-container {
      display: flex;
      width: 100%;
      flex-direction: column;
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
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
          margin-bottom: 14px;

          .visit-button {
            display: inline-flex;
            align-items: center;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: var(
              --color-7
            ); // Użyj koloru akcentowego swojej strony
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.9rem;
            transition:
              background-color 0.3s,
              color 0.3s;
            width: fit-content;

            &:hover {
              background-color: var(--color-2); // Kolor po najechaniu
              color: var(--black);
            }

            .external-icon {
              margin-left: 8px;
              font-style: normal;
            }
          }
        }

        .project-price {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          margin-bottom: 20px;
          padding: 8px 16px;
          background-color: var(--color-3); // dopasuj do swojej palety
          border-left: 3px solid #2ecc71; // ten sam zielony co wstążka forSale
          border-radius: 4px;

          &__label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--color-7);
          }

          &__value {
            font-size: 18px;
            font-weight: 700;
            color: #2ecc71;
          }
        }

        p {
          font-family: "Lora", serif;
        }
      }

      .gallery {
        display: flex;
        width: 100%;
        margin: auto;
        user-select: none;
        padding-top: 100px;
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
        padding: 10px 5px;

        .img-container {
          height: 180px;
        }

        .gallery {
          width: 100%;
          padding-top: 40px;
        }
      }
    }
  }
}
</style>
