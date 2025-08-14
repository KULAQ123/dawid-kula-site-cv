<template>
  <div class="portfolio-card-container">
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
  </div>
</template>

<script setup>
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
});
</script>

<style scoped lang="scss">
.portfolio-card-container {
  display: flex;
  flex: 1 1 calc(33.33% - var(--gap-m));
  max-width: calc(33.33% - 20px);
  max-height: 100%;
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
      margin-bottom: 5px;
      color: var(--color-7);
    }

    .portfolio-title {
    }
  }
}

@include medium-max {
  .item-container {
    flex: 1 1 calc(50% - var(--gap-m)); /* 50% szerokości */
    max-width: calc(50% - 20px);

    .card-container {
    }
  }
}

@include small-max {
  .item-container {
    flex: 1 1 100%;
    max-width: 100%;

    .card-container {
      flex-direction: column;
    }
  }
}
</style>
