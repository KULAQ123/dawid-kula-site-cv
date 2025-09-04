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
          src="/src/assets/images/profilImage.jpg"
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
          Jestem doświadczonym Frontend Developerem z Polski, posiadającym
          umiejętności w projektowaniu i implementacji stron internetowych oraz
          oprogramowania frontendowego. Pracując w branży, zdobyłem praktyczne
          doświadczenie w tworzeniu responsywnych i użytecznych interfejsów,
          dostosowanych do potrzeb użytkowników.
          <br />
          <br />
          Moja pasja do tworzenia estetycznych i funkcjonalnych rozwiązań
          pozwala mi efektywnie przekształcać wymagania projektowe w gotowe
          produkty. Jestem zmotywowany, kreatywny i zawsze dążę do doskonalenia
          swoich umiejętności w dynamicznie rozwijającym się świecie technologii
          internetowych.
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
            href="mailto:dawid3104@onet.pl"
            headline="Email"
            title="dawid3104@onet.pl"
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
  gap: var(--gap-m);

  .image-information {
    max-height: 330px;
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
    gap: var(--gap-m);

    h2 {
      font-size: 26px;
      font-weight: 500;
      line-height: 1.1em;
    }

    p {
      font-size: 16px;
      line-height: 1.5em;
      opacity: 0.8;
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
        height: 140px;
        margin: auto;
      }
    }

    .description-container {
      .info-container {
        flex-direction: column;

        .information-card-container {
        }
      }
    }
  }
}
</style>
