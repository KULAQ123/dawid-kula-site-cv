<template>
  <div class="border-button-component">
    <RouterLink
      v-if="href"
      v-ripple
      :to="href"
      class="border-button-container"
      :class="radius"
    >
      {{ text }}
    </RouterLink>
    <div
      v-else
      class="border-button-container"
      :class="radius"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "Bezpłatna konsultacja",
  },
  radius: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.border-button-component {
  display: flex;

  .border-button-container {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: var(--color-5);
    cursor: pointer;
    border: 1px solid var(--color-5);
    text-transform: uppercase;
    z-index: 1;
    transition: var(--transition);
    padding: 15px 20px;
    font: normal normal 700 1.4rem/1.8rem Rajdhani;
    letter-spacing: 1.4px;
    text-align: center;
    width: 100%;
    height: 100%;

    &.radius {
      border-radius: 24px;
      padding: 10px 40px;
    }

    .btn_bordered-text {
      font-weight: 600;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -1px;
      right: -1px;
      height: 100%;
      z-index: -1;
      background-color: var(--color-5);
      transform: scaleX(0);
      transform-origin: left center;
      transition:
        transform var(--transition) ease,
        transform-origin 0s var(--transition);
    }

    &:hover,
    &.active {
      color: white !important;

      &:before {
        transform: scaleX(1);
        transform-origin: right center;
      }
    }
  }
}
</style>
