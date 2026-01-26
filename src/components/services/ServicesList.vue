<template>
  <div class="fixed-contact">
    <a
      href="mailto:kontakt@dawidkula.pl"
      class="side-btn"
    >
      <span class="btn-text">Napisz do mnie</span>
    </a>
  </div>

  <div class="services-flex-container">
    <ScrollAnimation
      v-for="(service, index) in ServicesEnum"
      :key="index"
      animation-type="scale"
      :duration="500"
      :delay="100"
      class="service-item"
    >
      <div class="card-inner">
        <div class="icon-wrapper">{{ service.icon }}</div>
        <h3 class="service-name">{{ service.name }}</h3>
        <p class="service-text">{{ service.description }}</p>

        <div class="features-tags">
          <span
            v-for="feat in service.features"
            :key="feat"
            class="feat-tag"
          >
            {{ feat }}
          </span>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</template>

<script setup>
import { ServicesEnum } from "@/enums/ServicesData";
import ScrollAnimation from "@/components/ScrollAnimation.vue";
</script>

<style lang="scss" scoped>
.services-flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--gap-m);
  font-family: Poppins, sans-serif;

  .motion-container {
    overflow: unset;
  }

  .service-item {
    flex: 1 1 calc(33.33% - var(--gap-m));
    max-width: calc(33.33% - var(--gap-m));

    @include medium-max {
      flex: 1 1 calc(50% - var(--gap-m));
      max-width: calc(50% - var(--gap-m));
    }

    @include small-max {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  .card-inner {
    background: var(--white);
    border: 1px solid #eaeaea;
    padding: 30px;
    border-radius: 24px;
    height: 100%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    user-select: none;

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
      border-color: var(--brand);
    }

    .icon-wrapper {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    .service-name {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: #111;
    }

    .service-text {
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .features-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .feat-tag {
        background: #f1f5f9;
        padding: 5px 12px;
        border-radius: 8px;
        font-size: 0.85rem;
        color: #475569;
        font-weight: 500;
      }
    }

    @include small-max {
      padding: 25px;

      .icon-wrapper {
        margin-bottom: 10px;
      }

      .service-name {
        font-size: 1.2rem;
        margin-bottom: 0;
      }
    }
  }
}

.fixed-contact {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999; // Zwiększony zgodnie z sugestią, by był nad wszystkim
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .side-btn {
    background-color: var(--brand);
    color: white;
    text-decoration: none;
    padding: 15px 25px;
    border-radius: 50px;
    font-weight: 600;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    font-size: 1.1rem;
    animation: pulse 2s infinite;

    &:hover {
      background-color: #1d4ed8;
      transform: scale(1.02);
    }
  }

  @include small-max {
    right: 15px;
    bottom: 15px;

    .side-btn {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
}
</style>
