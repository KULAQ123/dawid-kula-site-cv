<template>
  <section>
    <div class="content">
      <div class="card-section">
        <div class="section-title">
          <h1>{{ props.cardTitle }}</h1>
          <div class="line-gradient"></div>
        </div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  cardTitle: {
    type: String,
  },
});
</script>

<style scoped>
section {
  padding-top: 100px;

  .content {
    .card-section {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      //margin-top: 100px;
      //background: var(--color-white);
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
</style>
