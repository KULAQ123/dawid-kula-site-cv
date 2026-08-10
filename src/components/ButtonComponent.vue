<template>
  <component
    :is="href?.length ? 'a' : to?.length ? 'RouterLink' : 'div'"
    v-ripple="ripple"
    :href="href"
    :to="to"
    class="button-container"
    :class="{ radius: radius, onlyIcon: onlyIcon, cursor: ripple }"
    :target="blank ? '_blank' : undefined"
  >
    <v-tooltip
      v-if="tooltip"
      activator="parent"
      :location="locationTooltip"
      >{{ textTooltip }}</v-tooltip
    >
    <v-badge
      v-if="badge"
      bordered
      floating
      location="top right"
      color="primary"
      :offset-x="-10"
      class="content-container"
      :class="{ 'white-text': whiteText }"
      content="11"
    >
      <slot name="icon"></slot>
      <div
        v-if="!onlyIcon"
        class="text"
      >
        {{ text }}
      </div>
    </v-badge>
    <div
      v-else
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
  textTooltip: {
    type: String,
  },
  locationTooltip: {
    type: String,
    default: "top",
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
  tooltip: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: Boolean,
    default: false,
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

    .text {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.3;
      white-space: nowrap;
      padding-left: var(--gap-xxm);
      align-content: center;
    }

    &.white-text {
      color: var(--white);
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
      background: var(--white);
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

@include medium-max {
  .button-container {
    &:hover {
      background-size: unset;
      transform: unset;
    }
  }
}
</style>
