// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    routeRules: {
        '/**': {prerender: true}
    },
    runtimeConfig: {
        public: {},
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    srcDir: 'src/',
    css: ['~/assets/css/main.scss'],
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-icon'
    ],
    googleFonts: {
        families: {
            'Kanit': true,
            'Hanken Grotesk': true
        }
    }
})