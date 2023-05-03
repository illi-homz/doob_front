<template>
    <div class="footer">
        <div class="container footer__content">
            <div class="footer__logo">
                <nuxt-link to="#main">
                    <Logo />
                </nuxt-link>
            </div>
            <ul class="footer__links">
                <li v-for="link in links" :key="link.url">
                    <nuxt-link :to="link.url" class="footer__link">
                        {{ link.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <ul class="footer__btns">
            <li v-for="btn in btns" :key="btn.url">
                <nuxt-link :to="btn.url" class="footer__btn" :target="btn.blank">
                    <Arrow v-if="btn.icon === 'arrow'" />
                    <Phone v-if="btn.icon === 'phone'" />
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/icons/logo.svg";
import Arrow from "@/assets/icons/arrow.svg";
import Phone from "@/assets/icons/phone.svg";

const links = [
    { title: "события", url: "#events" },
    { title: "услуги", url: "#services" },
    { title: "контакты", url: "#contacts" },
    { title: "карта", url: "#contacts" },
];
const btns = [
    { icon: "arrow", url: "#main", blank: '' },
    { icon: "phone", url: "tel:+49.157.0156", blank: '_blank' },
];
</script>

<style lang="scss">
.footer {
    position: relative;
    z-index: 10;
    padding: 40px 0;
    background-color: $dark-gray40;

    &__content {
        display: flex;
        padding-bottom: 60px;
    }

    &__logo {
        flex: 1;
    }

    &__links {
        flex: 1;
        display: flex;

        li {
            flex: 1;
        }
    }

    &__link {
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

    &__btns {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        gap: 20px;
        z-index: 100;
    }

    &__btn {
        display: flex;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background-color: $text-red;
        justify-content: center;
        align-items: center;
    }
}
</style>
