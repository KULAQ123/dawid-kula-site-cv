<template>
  <section>
    <div class="content">
      <div class="card-section">
        <div
          v-if="cardTitle"
          class="section-title"
        >
          <ScrollAnimation
            animation-type="slide-left"
            :duration="500"
            :delay="100"
          >
            <h1>{{ props.cardTitle }}</h1>
          </ScrollAnimation>
          <ScrollAnimation
            animation-type="slide-left"
            :duration="500"
            :delay="100"
          >
            <div class="line-gradient"></div>
          </ScrollAnimation>
        </div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScrollAnimation from "@/components/ScrollAnimation.vue";

const props = defineProps({
  cardTitle: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
section {
  padding-top: 100px;

  .content {
    .card-section {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      //margin-top: 100px;
      //background: var(--white);
      background: rgb(255, 255, 255);
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(227, 227, 227, 0.9) 100%
      );
      padding: 60px 80px;
      gap: var(--gap-xl);

      .section-title {
        display: flex;
        align-items: center;
        gap: var(--gap-m);
        white-space: nowrap;

        .line-gradient {
          width: 200px;
          height: 3px;
          border-radius: 30px;
          background: var(--color-radial-2);
          background-size: 600%;
          animation: animeGradient 15s linear infinite;
        }
      }
    }
  }
}

@include medium-max {
}

@include small-max {
  section {
    .content {
      .card-section {
        padding: 32px 20px;
        gap: var(--gap-s);

        .section-title {
          .line-gradient {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
