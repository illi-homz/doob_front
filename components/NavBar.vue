<template>
    <div class="navbar">
        <nuxt-link to="/">
            <Logo />
        </nuxt-link>
        <ul class="navbar__items">
            <li v-for="link in links" :key="link.url">
                <nuxt-link :to="link.url" class="navbar__item">
                    {{ link.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/icons/logo.svg";

const links = [
    { title: "события", url: "#events" },
    { title: "услуги", url: "#services" },
    { title: "контакты", url: "#contacts" },
    { title: "карта", url: "#contacts" },
];
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  &__items {
    display: flex;
    justify-content: space-between;
    min-width: 60%;
  }

  &__item {
    font-family: $tupovyaz;
    font-weight: normal;
    display: block;
    text-transform: uppercase;
    color: $white;
    font-size: 24px;
    line-height: 28px;
    padding: 0 15px;

    &:hover {
      color: $text-red;
    }
  }
}
</style>
