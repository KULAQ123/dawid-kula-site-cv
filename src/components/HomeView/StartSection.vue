<template>
  <section class="home-banner">
    <div class="content">
      <div class="banner-container">
        <div class="personal-container">
          <img
            src="/src/assets/images/profilImage.jpg"
            alt="Person Image"
          />
        </div>
        <div class="about-container">
          <h3 class="heading-lg">
            {{ PersonInformation.name }} {{ PersonInformation.lastName }}
          </h3>
          <h5 class="heading-md">{{ PersonInformation.workplaceFirst }}</h5>
        </div>
        <div class="social-container">
          <ButtonComponent
            href="https://www.facebook.com/dawid.kula"
            onlyIcon
            ripple
            blank
            class="facebook"
          >
            <template #icon>
              <FontAwesomeIcon
                :icon="faFacebookF"
                fade
                style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
              /> </template
          ></ButtonComponent>
          <ButtonComponent
            href="https://x.com/KULAQOFFICIAL"
            onlyIcon
            ripple
            blank
            class="twitter"
          >
            <template #icon>
              <FontAwesomeIcon
                :icon="faXTwitter"
                fade
                style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
              /> </template
          ></ButtonComponent>
          <ButtonComponent
            href="https://www.instagram.com/kulaq/"
            onlyIcon
            ripple
            blank
            class="instagram"
          >
            <template #icon>
              <span class="gradient-icon">
                <FontAwesomeIcon
                  :icon="faInstagram"
                  class="icon"
                  fade
                  style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
                /> </span></template
          ></ButtonComponent>
          <ButtonComponent
            href="https://www.facebook.com/dawid.kula"
            onlyIcon
            ripple
            blank
            class="linkedIn"
          >
            <template #icon>
              <FontAwesomeIcon
                :icon="faLinkedin"
                fade
                style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
              /> </template
          ></ButtonComponent>
        </div>
        <ButtonComponent
          whiteText
          radius
          ripple
          :text="$t('home.downloadCV')"
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
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { PersonInformation } from "@/enums/PersonInformation";

const downloadFile = async () => {
  try {
    const filePath = "src/assets/documents/cv.pdf";
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

<style scoped>
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
        width: 400px;
        height: 400px;
        border-radius: 100%;
        margin-left: auto;
        margin-right: auto;
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
        gap: var(--gap-xm);
      }

      .social-container {
        display: flex;
        gap: 10px;

        .facebook {
          color: #3c6ae3;
        }

        .twitter {
          color: #e7e9ea;

          :hover {
            color: #000000;
          }
        }

        .instagram {
          color: #f65154;
        }

        .linkedIn {
          color: #1c4376;
        }
      }
    }
  }
}
</style>
