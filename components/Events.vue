<template>
    <div class="events">
        <div v-for="event in events" :key="event.id" class="events__event">
            <video
                v-if="event.video"
                :src="MEDIAFILES_URL + event.video"
                class="events__video"
                autoplay
                muted
                loop
                controls
                preload="metadata" />
            <img v-else-if="event.photo" :src="MEDIAFILES_URL + event.photo" alt="img" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { EventType } from "~/types/events";

const config = useRuntimeConfig();
const MEDIAFILES_URL = config.public.mediafilesUrl;

const props = defineProps<{
    items?: EventType[];
}>();
const events = props.items || [];
console.log("events", events);
</script>

<style lang="scss">
.events {
    &__video {
        width: 100%;
        // height: 100px;
    }
}
</style>
