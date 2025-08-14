<template>
  <div
    v-if="isHome"
    class="services-button"
  >
    <RouterLink
      to="/uslugi"
      class="button-link"
      @mouseenter="showTip = true"
      @mouseleave="showTip = false"
      @focus="showTip = true"
      @blur="showTip = false"
    >
      <FontAwesomeIcon
        :icon="faSuitcase"
        class="color-lightblue"
      />
      <span
        v-show="showTip"
        class="tooltip"
      >
        Kliknij i poznaj moje usługi – może właśnie Ciebie zainteresują!
      </span>
    </RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const route = useRoute();
const isHome = computed(() => route.name === "home");

const showTip = ref(false);
</script>

<style scoped lang="scss">
.services-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;

  .button-link {
    position: relative;
    background-color: #2563eb;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 9999px;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    animation: pulse 2s infinite;

    &:hover {
      background-color: #1d4ed8;
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.6);
    }
  }

  .tooltip {
    position: absolute;
    bottom: 120%;
    right: 0;
    max-width: 500px;
    min-width: 200px;
    white-space: normal;
    text-align: center;
    background: rgba(37, 99, 235, 0.9);
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    user-select: none;
    z-index: 60;
    font-size: 12px;
  }

  .button-link:hover .tooltip,
  .button-link:focus .tooltip {
    opacity: 1;
    pointer-events: auto;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
}
</style>
