<template>
  <div class="information-container">
    <ScrollAnimation
      animation-type="scale"
      :duration="500"
      :delay="100"
      class="image-container"
    >
      <div class="image-information">
        <img
          src="/images/profilImage.jpg"
          alt="Profil Image"
        />
      </div>
    </ScrollAnimation>
    <ScrollAnimation
      animation-type="slide-right"
      :duration="500"
      :delay="100"
    >
      <div class="description-container">
        <h2>Kim jestem?</h2>
        <p>
          Jestem Frontend Developerem, który tworzy nie tylko działające, ale i
          przyjemne w użytkowaniu interfejsy. Specjalizuję się w projektowaniu
          responsywnych stron i aplikacji, łącząc estetykę z funkcjonalnością.
          Do mojej pracy podchodzę praktycznie i kreatywnie — potrafię zamienić
          wymagania projektowe w produkty, które działają sprawnie i są
          intuicyjne dla użytkowników.
          <br />
          <br />
          Choć moją główną pasją jest frontend, mam doświadczenie w innych
          obszarach IT, takich jak testowanie, grafika czy marketing, co pozwala
          mi lepiej rozumieć cały proces tworzenia projektu. Ukończyłem
          informatykę ze specjalizacją w programowaniu, więc czuję się pewnie w
          pracy nad różnorodnymi technologiami. Lubię wyzwania i stale rozwijam
          swoje umiejętności, by tworzyć nowoczesne, przemyślane rozwiązania.
        </p>
        <h2>Dane kontaktowe</h2>
        <div class="info-container">
          <InformationCard
            href="tel:782503000"
            headline="Telefon"
            title="782 503 000"
          >
            <template #button>
              <ButtonComponent only-icon>
                <template #icon>
                  <FontAwesomeIcon
                    :icon="faMobileScreenButton"
                    fade
                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
                  /> </template
              ></ButtonComponent>
            </template>
          </InformationCard>
          <InformationCard
            headline="Miejsce zamieszkania"
            title="Olesno, opolskie"
          >
            <template #button>
              <ButtonComponent
                only-icon
                :ripple="false"
              >
                <template #icon>
                  <FontAwesomeIcon
                    :icon="faMapLocation"
                    fade
                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
                  /> </template
              ></ButtonComponent>
            </template>
          </InformationCard>
          <InformationCard
            href="mailto:kontakt@dawidkula.pl"
            headline="Email"
            title="kontakt@dawidkula.pl"
          >
            <template #button>
              <ButtonComponent only-icon>
                <template #icon>
                  <FontAwesomeIcon
                    :icon="faEnvelope"
                    fade
                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
                  /> </template
              ></ButtonComponent>
            </template>
          </InformationCard>
          <InformationCard
            headline="Urodziny"
            title="Styczeń 23, 1999"
          >
            <template #button>
              <ButtonComponent
                only-icon
                :ripple="false"
              >
                <template #icon>
                  <FontAwesomeIcon
                    :icon="faCalendarDays"
                    fade
                    style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6"
                  /> </template
              ></ButtonComponent>
            </template>
          </InformationCard>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</template>

<script setup>
import {
  faMobileScreenButton,
  faCalendarDays,
  faEnvelope,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ButtonComponent from "@/components/ButtonComponent.vue";
import InformationCard from "@/components/ui/InformationCard.vue";
import ScrollAnimation from "@/components/ScrollAnimation.vue";
</script>

<style scoped lang="scss">
.information-container {
  display: flex;
  gap: var(--gap-xl);

  .image-information {
    max-height: 410px;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  .motion-container {
    width: 100%;
  }

  .image-container {
    width: 25%;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gap-l);

    h2 {
      font-size: 26px;
      font-weight: 600;
      line-height: 1.1em;
    }

    p {
      font-family: "Roboto Slab", serif;
      font-size: 16px;
      line-height: 1.5em;
      opacity: 0.8;
      max-width: 800px;
    }

    .info-container {
      display: flex;
      gap: var(--gap-m);
      flex-wrap: wrap;

      .button-container {
        padding: 10px 12px;

        &:hover {
          background: var(--color-7);
          transform: unset;
          transition: unset;
          animation: unset;
        }
      }

      svg {
        color: var(--white);
      }
    }
  }
}

@media (max-width: 1000px) {
}

@media (max-width: 850px) {
  .information-container {
    flex-direction: column;

    .image-container {
      display: flex;
      width: 100%;

      .image-information {
        width: unset;
        margin: auto;
      }
    }

    .description-container {
      gap: var(--gap-m);

      .info-container {
        flex-direction: column;

        .information-card-container {
        }
      }
    }
  }
}
</style>
