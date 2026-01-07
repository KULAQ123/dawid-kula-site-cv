<template>
  <header :class="{ active: isMenuOpen, 'sticky-header': isSticky }">
    <div class="content">
      <div class="logo-container">
        <RouterLink :to="{ name: 'home' }">
          <img
            src="/images/Logo.png"
            height="158"
            alt="Logo"
          />
        </RouterLink>
      </div>
      <NavbarComponent @toggle-menu="handleToggleMenu"></NavbarComponent>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

const isSticky = ref(false);
const isMenuOpen = ref(false);

const handleToggleMenu = (isOpen) => {
  isMenuOpen.value = isOpen;
};

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
  //background-image: url(../assets/images/bg-image.jpg);
  background-image: var(--color-radial-4);
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

  &.sticky-header {
    box-shadow: var(--shadow-3);
  }

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
      padding: 5px 0;

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
          //mix-blend-mode: multiply;
        }
      }
    }

    .navbar-container {
      display: flex;
      align-items: center;
      gap: 50px;

      svg {
        height: 20px;
        color: var(--white);
      }

      .button-container {
        .content-container {
          .text {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--white);
          }
        }
      }
    }
  }
}

@include medium-max {
  header {
    justify-content: space-between;
    padding: 0 16px;
    transition: background 0.3s;
    transition-delay: 0.3s;
    box-shadow: var(--shadow2);

    .content {
      justify-content: space-between;
      padding: 0 !important;

      .header-container {
        padding: 20px 16px 10px;

        .login-button {
          display: none;
        }
      }
    }
  }
}

@include small-max {
  header {
    .content {
      .header-container {
        a {
          img {
            width: 120px;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
