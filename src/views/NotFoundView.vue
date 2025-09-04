<template>
  <main>
    <div class="content">
      <div class="not-found-container">
        <div class="not-not-found-text">
          <h1 class="text-red">404 - Strona nie istnieje</h1>
          <p class="text-grey-darken-4">
            Ups! Wygląda na to, że podany adres jest nieprawidłowy.
          </p>
        </div>
        <div class="not-found-button">
          <ButtonComponent
            text="Wróć na stronę główną"
            to="/"
            white-text
          ></ButtonComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<style scoped lang="scss">
.content {
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    height: calc(100dvh - 200px);

    .not-not-found-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--gap-m);
    }
    .not-found-button {
      display: flex;
    }
  }
}
</style>
