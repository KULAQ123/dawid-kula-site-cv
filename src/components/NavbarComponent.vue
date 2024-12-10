<template>
  <div class="nav-container">
    <div
      class="hamburger-menu"
      :class="{ collapsed: navOpen }"
    >
      <div
        class="button-menu"
        @click="toggleMenu"
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
    <div
      class="nav-box"
      :class="{ hidden: !navOpen }"
      :style="`height: ${navHeight}`"
    >
      <nav ref="navElement">
        <ButtonComponent
          :to="localizedPath('#start')"
          :text="$t('nav.home')"
          @click="closeMenu"
        >
          <template #icon> <FontAwesomeIcon :icon="faUser" /></template>
        </ButtonComponent>
        <ButtonComponent
          :to="localizedPath('#education')"
          :text="$t('nav.education')"
          @click="closeMenu"
        >
          <template #icon
            ><FontAwesomeIcon :icon="faGraduationCap" />
          </template>
        </ButtonComponent>
        <ButtonComponent
          to="/#skills"
          :text="$t('nav.skills')"
          @click="closeMenu"
        >
          <template #icon><FontAwesomeIcon :icon="faBarsProgress" /> </template>
        </ButtonComponent>
        <ButtonComponent
          to="/examples"
          :text="$t('nav.examples')"
          @click="closeMenu"
        >
          <template #icon><FontAwesomeIcon :icon="faLaptopCode" /> </template>
        </ButtonComponent>
      </nav>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import {
  faUser,
  faGraduationCap,
  faLaptopCode,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const navOpen = ref(false);
const navHeight = ref("");
const windowWidth = ref(window.innerWidth);
const navElement = ref(null);
const { locale } = useI18n();

const localizedPath = (hash) => {
  return `/${locale.value}/${hash}`;
};

const toggleMenu = () => {
  navOpen.value = !navOpen.value;
  setNavHeight();
};

const closeMenu = () => {
  navOpen.value = false;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  setNavHeight();
  closeMenu();
};

const setNavHeight = () => {
  if (navElement.value) {
    navHeight.value = `${navElement.value.offsetHeight}px`;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  setNavHeight();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.nav-container {
  display: flex;
  justify-content: space-between;
  min-width: 550px;
  max-width: 100%;
  align-items: center;
  gap: 50px;

  .nav-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

    nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 20px;

      a {
        font-size: 1.6rem;
        line-height: 32px;
        font-weight: 500;
        color: var(--white);
      }
    }
  }

  .hamburger-menu {
    display: none;
    cursor: pointer;

    &.collapsed {
      .button-menu {
        .line1 {
          transform: rotate(45deg);
        }

        .line2 {
          transform: scaleY(0);
        }

        .line3 {
          transform: rotate(-45deg);
        }
      }
    }

    .button-menu {
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 2.8rem;
      justify-content: space-between;
      width: 3.7rem;

      .line {
        background: var(--white);
        border-radius: 1rem;
        display: block;
        height: 0.4rem;
        width: 97%;
      }

      .line1 {
        transform-origin: 0 0;
        transition: transform 0.4s ease-in-out;
      }

      .line2 {
        transition: transform 0.2s ease-in-out;
      }

      .line3 {
        transform-origin: 0 100%;
        transition: transform 0.4s ease-in-out;
      }
    }
  }
}

@media (max-width: 1000px) {
  .nav-container {
    width: unset;
    min-width: unset;

    .nav-box {
      position: absolute;
      left: 0;
      top: 90%;
      flex-direction: column;
      background-image: var(--color-radial-4);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      width: 100vw;
      overflow: hidden;
      transition: height 0.3s;
      box-shadow: var(--shadow-3);

      &.hidden {
        height: 0 !important;

        nav {
          position: relative;
          z-index: -1;
        }
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 30px;
        gap: 0;

        a {
          width: 100%;
          background: unset;
          border-bottom: 1px solid var(--color-7);
          border-radius: 0;
        }
      }
    }

    .hamburger-menu {
      display: flex;
    }
  }
}
</style>
