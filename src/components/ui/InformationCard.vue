<template>
  <component
    :is="href?.length ? 'a' : 'div'"
    :href="href"
    class="information-card-container"
    :class="[{ link: href }]"
    :target="blank ? '_blank' : undefined"
  >
    <slot name="button"></slot>
    <div class="text-container">
      <div class="headline">{{ headline }}</div>
      <div class="title">{{ title }}</div>
    </div>
  </component>
</template>

<script setup>
defineProps({
  href: {
    type: String,
  },
  headline: {
    type: String,
  },
  title: {
    type: String,
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.information-card-container {
  display: flex;
  align-items: center;
  gap: var(--gap-xm);
  min-width: 40%;

  &.link {
    cursor: pointer;

    &:hover {
      color: var(--black);
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;

    .headline {
      font-size: 0.9rem;
      line-height: 1.2em;
    }

    .title {
      font-size: 1.2rem;
      line-height: 1.2em;
      font-weight: 500;
    }
  }
}
</style>
