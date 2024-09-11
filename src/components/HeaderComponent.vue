<template>
  <header :class="{ 'sticky-header': isSticky }">
    <div class="content">
      <div class="logo-container">
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">
          <img
            src="@/assets/images/logoDKWhite.png"
            height="100"
            alt="Logo"
          />
        </RouterLink>
      </div>
      <div class="navbar-container">
        <ButtonComponent
          :to="localizedPath('#start')"
          :text="$t('nav.home')"
        >
          <template #icon> <FontAwesomeIcon :icon="faUser" /></template>
        </ButtonComponent>
        <ButtonComponent
          :to="localizedPath('#education')"
          :text="$t('nav.education')"
        >
          <template #icon
            ><FontAwesomeIcon :icon="faGraduationCap" />
          </template>
        </ButtonComponent>
        <ButtonComponent
          :to="localizedPath('#experience')"
          :text="$t('nav.experience')"
        >
          <template #icon><FontAwesomeIcon :icon="faBriefcase" /> </template>
        </ButtonComponent>
        <ButtonComponent
          to="/#skills"
          :text="$t('nav.skills')"
        >
          <template #icon><FontAwesomeIcon :icon="faBarsProgress" /> </template>
        </ButtonComponent>
        <ButtonComponent
          to="/examples"
          :text="$t('nav.examples')"
        >
          <template #icon><FontAwesomeIcon :icon="faLaptopCode" /> </template>
        </ButtonComponent>
      </div>
    </div>
  </header>
</template>

<script setup>
import Tr from "@/i18n/translation";
import ButtonComponent from "@/components/ButtonComponent.vue";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const isSticky = ref(false);
const { locale } = useI18n();

const localizedPath = (hash) => {
  return `/${locale.value}/${hash}`;
};

// Metody obsługi zdarzeń
// const handleToggleMenu = (isOpen) => {
//   isMenuOpen.value = isOpen;
// };

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};

// Podpięcie obsługi zdarzeń podczas montowania komponentu
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
header {
  background-image: url(../assets/images/bg-image.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  height: var(--header-height);
  font-size: 1.8rem;
  position: sticky;
  top: 0;
  z-index: 6;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0 30px;
    gap: 50px;

    .logo-container {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 10px 0;

      svg {
        width: 200px;
        color: #ea2424;
      }

      a {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 1.4rem;

        img {
          height: 100%;
        }
      }
    }

    .navbar-container {
      display: flex;
      align-items: center;
      gap: 50px;

      svg {
        height: 20px;
        color: var(--color-white);
      }

      .button-container {
        .content-container {
          .text {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-white);
          }
        }
      }
    }
  }
}
</style>
