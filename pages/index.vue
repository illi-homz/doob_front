<template>
    <div class="info" id="info">
        <NavBar />
        <Swiper
            v-if="allBanners"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperEffectFade, SwiperPagination]"
            :allow-touch-move="false"
            :slides-per-view="1"
            :loop="true"
            :speed="1000"
            class="info__main-swiper"
            effect="fade"
            :pagination="{
                enabled: true,
                bulletActiveClass: 'info__bullet-active',
                bulletClass: 'info__bullet',
                bulletElement: 'div',
                clickable: true,
                clickableClass: 'info__pagination-clickable',
                modifierClass: 'info__pagination-',
            }"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }">
            <SwiperSlide
                v-for="banner in allBanners"
                :key="banner?.id"
                :style="`background-image: url(${MEDIAFILES_URL + banner?.img});`"
                class="info__slide">
                <div class="info__slide-logo">
                    <MainLogo />
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="container info__block info__events" id="events" style="height: 100vh">
            <h2 class="info__block-title">Events</h2>
            <Events :items="allEvents" />
        </div>
        <div class="container info__block info__services" id="services" style="height: 100vh">
            <h2 class="info__block-title">Servise price</h2>
        </div>
        <div class="info__contacts-wrapper" id="contacts">
            <div class="container info__contacts">
                <h2 class="info__block-title no-line">Contactus</h2>
                <ul class="info__contacts-links">
                    <li>
                        <div class="info__contacts-link-text">Интернациональная 38</div>
                        <nuxt-link to="tel:+7 (919) 424-65-43" target="_blank">
                            <div class="info__contacts-link-num">+7 (919) 424-65-43</div>
                        </nuxt-link>
                    </li>
                    <li>
                        <div class="info__contacts-link-text">График работы Doob Records:</div>
                        <div>
                            <span class="info__contacts-link-text">Пн-Вс: </span>
                            <span class="info__contacts-link-num">10:00-18:00</span>
                        </div>
                    </li>
                    <li>
                        <nuxt-link to="https://instagram.com" target="_blank" class="info__social-link"
                            ><InstaSvg
                        /></nuxt-link>
                        <nuxt-link to="https://tg.com" target="_blank" class="info__social-link"><TgSvg /></nuxt-link>
                        <nuxt-link to="https://vk.com" target="_blank" class="info__social-link"><VkSvg /></nuxt-link>
                        <nuxt-link to="https://youtube.com" target="_blank" class="info__social-link"
                            ><YoutubeSvg
                        /></nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="info__location">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=44.675590%2C43.050947&mode=whatshere&whatshere%5Bpoint%5D=44.675635%2C43.051050&whatshere%5Bzoom%5D=17&z=19.93"
                    frameborder="1"
                    allowfullscreen="true"
                    style="position: relative" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRaw } from "vue";
import MainLogo from "@/assets/icons/mainLogo.svg";
import InstaSvg from "@/assets/icons/insta-round.svg";
import TgSvg from "@/assets/icons/tg-round.svg";
import VkSvg from "@/assets/icons/vk-round.svg";
import YoutubeSvg from "@/assets/icons/youtube-round.svg";
import { EventType } from "~/types/events";

const config = useRuntimeConfig();
const MEDIAFILES_URL = config.public.mediafilesUrl;

useHead({
    title: "Doob records",
});

const {
    data: { value: allBannersValue },
} = await useAsyncGql("banners");
const {
    data: { value: allEventsValue },
} = await useAsyncGql("events");

const allBanners = toRaw(allBannersValue)?.allBanners;
const allEvents = toRaw(allEventsValue)?.allEvents as EventType[];
</script>

<style lang="scss">
.info {
    position: relative;
    overflow-x: hidden;

    .navbar {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        width: $lg + px;
    }

    &__title {
        color: $white;
        font-family: $tupovyaz;
        font-weight: normal;
    }

    .swiper {
        height: 100vh;
    }

    &__slide {
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__slide-logo {
        position: absolute;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
    }

    & &__block {
        margin-bottom: 80px;
    }

    &__block-title {
        font-family: $blackiron;
        color: $text-red;
        font-size: 50px;
        line-height: 55px;
        border-bottom: 2px solid $text-red;

        &.no-line {
            border-bottom-width: 0px;
        }
    }

    &__contacts-wrapper {
        position: relative;
        height: 520px;
        border-color: $text-red;
        border-style: solid;
        border-top-width: 2px;
        border-bottom-width: 2px;
    }

    &__contacts {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;

        .info__block-title {
            margin-bottom: 50px;
        }
    }

    & &__location {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        z-index: 100;
        background-color: $background;
        overflow: hidden;

        iframe {
            opacity: 70%;
            width: 100%;
            height: 100%;
            // height: 600px;
        }

        .info__block-title {
            margin-bottom: 30px;
        }
    }

    &__contacts-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;

        li {
            &:nth-child(3) {
                display: flex;
                gap: 10px;
            }
        }
    }

    &__social-link {
    }

    &__contacts-link-text {
        color: $white;
        font-family: $inter;
        font-size: 16px;
        line-height: 19px;
    }

    div.info__contacts-link-text {
        margin-bottom: 10px;
    }

    &__contacts-link-num {
        color: $white;
        font-family: $bebasneue;
        font-size: 22px;
        line-height: 26px;
    }

    &__main-swiper {
        overflow: unset;
        margin-bottom: 130px;
    }

    & &__pagination-bullets {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-150%);
        display: flex;
        gap: 40px;
    }

    & &__bullet {
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        transition: transform 1s ease;
        background: linear-gradient(180deg, #990000 0%, rgba(153, 0, 0, 0) 115%);
        cursor: pointer;
        transform: scaleX(0.6);

        &::before,
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 1s ease;
        }

        &::before {
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(
                50% 50% at 50% 50%,
                rgba(239, 0, 0, 0) 0%,
                #ef0000 25.52%,
                rgba(239, 0, 0, 0) 98.44%
            );
        }

        &::after {
            background: url("~/assets/icons/activeSlide.svg") center / cover no-repeat;
        }
    }

    & &__bullet-active {
        transform: scale(2);

        &::before,
        &::after {
            opacity: 1;
        }
    }
}
</style>
