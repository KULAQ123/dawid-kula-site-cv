<template>
  <ScrollAnimation
    animation-type="scale"
    class="portfolio-card-container"
    :duration="500"
    :delay="100"
  >
    <div
      v-if="forSale"
      class="ribbon"
    >
      <span>Na sprzedaż</span>
    </div>
    <div class="portfolio-content">
      <div class="portfolio-img">
        <img
          :src="imgLink"
          alt="Logo"
        />
        <div class="hover-img"></div>
      </div>
      <div class="portfolio-subtitle">
        <div class="text-sm">{{ subtitle }}</div>
      </div>
      <div class="portfolio-title">
        <div class="text-md">{{ title }}</div>
      </div>
    </div>
  </ScrollAnimation>
</template>

<script setup>
import ScrollAnimation from "@/components/ScrollAnimation.vue";

defineProps({
  imgLink: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  title: {
    type: String,
  },
  forSale: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
.portfolio-card-container {
  display: flex;
  flex: 0 1 calc(33.33% - var(--gap-m));
  max-width: calc(33.33% - var(--gap-m));
  box-shadow: var(--shadow-2);

  &:hover {
    .portfolio-content {
      .portfolio-img {
        img {
          transform: scale(1.3);
        }
      }
    }
  }

  .ribbon {
    position: absolute;
    top: 23px;
    right: -35px;
    width: 140px;
    background-color: #2ecc71;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    padding: 5px 0;
    transform: rotate(45deg);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    pointer-events: none;
    z-index: 10;
  }

  .portfolio-content {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    margin-bottom: 0;
    padding: 20px;
    background-color: var(--color-3);
    width: 100%;
    cursor: pointer;

    .portfolio-img {
      height: 266px;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      text-align: center;
      object-fit: cover;
      border-radius: 8px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        display: block;
        max-width: 100%;
        vertical-align: middle;
        transition: all 1s;
      }

      .hover-img {
      }
    }

    .portfolio-subtitle {
      margin-top: 20px;
      margin-bottom: 10px;
      color: var(--color-7);
    }

    .portfolio-title {
    }
  }
}

@include medium-max {
  .portfolio-card-container {
    flex: 1 1 calc(50% - var(--gap-m)); /* 50% szerokości */
    max-width: calc(50% - 20px);

    .card-container {
    }
  }
}

@include small-max {
  .portfolio-card-container {
    flex: 1 1 100%;
    max-width: 100%;

    .card-container {
      flex-direction: column;
    }

    .portfolio-content {
      .portfolio-img {
        height: auto;
      }

      .portfolio-subtitle {
        text-align: center;
      }

      .portfolio-title {
        text-align: center;
      }
    }
  }
}
</style>
