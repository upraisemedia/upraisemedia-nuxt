// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    routeRules: {
        '/**': {prerender: true}
    },
    app: {
        head: {
            // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
            script: [
                {
                    src: "https://maps.googleapis.com/maps/api/js?key=" + process.env.GOOGLE_API_KEY + "&loading=async&libraries=places",
                    body: true
                }
            ]
        },
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
        'nuxt-icon',
        '@nuxt/image',
    ],
    googleFonts: {
        families: {
            'Kanit': true,
            'Hanken Grotesk': true
        }
    }
})