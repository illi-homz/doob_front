<template>
    <div class="default-layout" id="main">
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss">
.default-layout {
    min-height: 100vh;
    position: relative;
    background-color: $background;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        // z-index: 100;
        background-image: url("@/assets/icons/back.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
}
</style>
