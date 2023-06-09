// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: "123",
        apiUrl: "",
        public: {
            apiBase: "/api",
            mediafilesUrl: "/mediafiles/",
        },
    },
    app: {
        head: {
            meta: [
                { name: "description", content: "any description" },
                { name: "keywords", content: "nuxt vue" },
            ],
            title: "Hello new project",
        },
    },
    modules: ["nuxt-swiper", "nuxt-graphql-client", "nuxt-svgo"],
    swiper: {},
    imports: {
        dirs: [],
    },
    ssr: true,
    typescript: {
        strict: true,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles.scss" as *;',
                },
            },
        },
        server: {
            proxy: {
                "/mediafiles": "http://127.0.0.1:8000",
            },
        },
    },
});
