<template>
  <component
    v-ripple="ripple"
    :is="href?.length ? 'a' : to?.length ? 'RouterLink' : 'div'"
    :href="href"
    :to="to"
    class="button-container"
    :class="{ radius: radius, onlyIcon: onlyIcon, cursor: ripple }"
    :target="blank ? '_blank' : undefined"
  >
    <div
      class="content-container"
      :class="{ 'white-text': whiteText }"
    >
      <slot name="icon"></slot>
      <div
        v-if="!onlyIcon"
        class="text"
      >
        {{ text }}
      </div>
    </div>
  </component>
</template>

<script setup>
defineProps({
  href: {
    type: String,
  },
  to: {
    type: String,
  },
  text: {
    type: String,
  },
  radius: {
    type: Boolean,
    default: false,
  },
  onlyIcon: {
    type: Boolean,
    default: false,
  },
  whiteText: {
    type: Boolean,
    default: false,
  },
  blank: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.button-container {
  border-radius: 8px;
  padding: 10px 18px;
  color: var(--black);
  background: var(--color-7);
  transition: all 0.3s;
  user-select: none;

  .content-container {
    justify-content: center;
    align-items: center;
    display: flex;
    //gap: var(--gap-xm);

    .text {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.3;
      padding-left: var(--gap-xm);
    }

    &.white-text {
      color: var(--color-white);
    }
  }

  &.cursor {
    cursor: pointer;
  }

  &.radius {
    animation: anime 15s linear infinite;
    background: var(--color-radial-2);
    background-size: 600%;
  }

  &.onlyIcon {
    height: 44px;
    width: 44px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-white);
    }
  }

  &:hover {
    background: var(--color-radial-2);
    animation: animeGradient 15s linear infinite;
    background-size: 600%;
    transform: scale(1.1);
    transition: all 0.3s;
  }
}
</style>
