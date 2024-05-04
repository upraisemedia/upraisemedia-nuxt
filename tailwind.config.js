/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./src/app.vue",
        "./src/error.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                xl: '1320px',
                '2xl': '1320px',
            }
        },
        fontFamily: {
            heading: ['Kanit', 'sans-serif'],
            body: ['Hanken Grotesk', 'serif'],
        },
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            tertiary: 'var(--color-tertiary)',
            white: 'var(--color-white)',
            black: 'var(--color-black)',
        },
        extend: {},
    },
    plugins: [],
}

