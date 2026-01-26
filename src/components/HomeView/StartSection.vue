<template>
  <section class="home-banner">
    <div class="content">
      <div class="banner-container">
        <div class="personal-container">
          <img
            src="/images/profilImage.jpg"
            alt="Person Image"
          />
        </div>
        <div class="about-container">
          <h3 class="heading-lg">
            {{ PersonInformation.name }} {{ PersonInformation.lastName }}
          </h3>
          <AnimatedText :texts="PersonInformation.workplace" />
        </div>
        <div class="social-container">
          <ButtonComponent
            href="https://www.linkedin.com/in/dawid-kula-97256623b/"
            only-icon
            ripple
            blank
            class="linkedIn"
            tooltip
            text-tooltip="Mój LinkedIn"
          >
            <template #icon>
              <FontAwesomeIcon
                :icon="faLinkedin"
                fade
                style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
              /> </template
          ></ButtonComponent>
          <ButtonComponent
            href="https://github.com/KULAQ123"
            only-icon
            ripple
            blank
            class="github"
            tooltip
            text-tooltip="Mój Github"
          >
            <template #icon>
              <FontAwesomeIcon
                :icon="faGithub"
                fade
                style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
              /> </template
          ></ButtonComponent>
        </div>
        <ButtonComponent
          white-text
          radius
          ripple
          text="Pobierz CV"
          @click="downloadFile"
        >
          <template #icon>
            <FontAwesomeIcon
              :icon="faDownload"
              class="icon"
            />
          </template>
        </ButtonComponent>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { PersonInformation } from "@/enums/PersonInformation";
import AnimatedText from "@/components/ui/AnimatedText.vue";

const downloadFile = async () => {
  try {
    const filePath = "/documents/cv.pdf";
    const response = await fetch(filePath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "DawidKulaCV.pdf");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania pliku:", error);
  }
};
</script>

<style scoped lang="scss">
.home-banner {
  display: flex;
  width: 100%;

  .content {
    .banner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: calc(100dvh - 100px);
      justify-content: center;
      gap: var(--gap-l);

      .personal-container {
        width: 100%;
        max-width: 360px;
        aspect-ratio: 1;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        overflow: hidden;
        user-select: none;
        box-shadow: 1px 0 10px 0 var(--color-gray-100);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 10%;
          display: block;
          user-select: none;
          pointer-events: none;
        }
      }
      .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-2);
        gap: var(--gap-xxm);
      }

      .social-container {
        display: flex;
        gap: 18px;

        svg {
          width: 36px;
          height: 36px;
        }

        .facebook {
          color: #3c6ae3;
        }

        .twitter {
          color: #e7e9ea;

          &:hover {
            color: #000000;
          }
        }

        .instagram {
          color: #f65154;
        }

        .linkedIn {
          color: #1c4376;
          width: 55px;
          height: 55px;
        }

        .github {
          color: #e7e9ea;
          width: 55px;
          height: 55px;

          &:hover {
            color: #000000;
          }
        }
      }
    }
  }
}

@include medium-max {
}

@include small-max {
  .home-banner {
    display: flex;
    width: 100%;

    .content {
      .banner-container {
        gap: var(--gap-m);

        .personal-container {
          max-width: 250px;
        }
      }
    }
  }
}
</style>
