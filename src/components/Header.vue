<script setup>
const route = useRoute();

const navigationVisible = ref(false);
const headerInverted = ref(false);
const navigationItems = [
    {
        name: 'Home',
        path: '/',
        key: 'index'
    },
    {
        name: 'Over ons',
        path: '/over-ons',
        key: 'over-ons'
    },
    {
        name: 'Ons werk',
        path: '/ons-werk',
        key: 'ons-werk'
    },
    {
        name: 'Diensten',
        path: '/diensten',
        key: 'diensten'
    },
    {
        name: 'Contact',
        path: '/contact',
        key: 'contact'
    }
];

/**
 * Toggle the navigation visibility
 */
function checkScroll() {
    if (window.scrollY > 100) {
        if (route.name === 'index') {
            document.querySelector('header').classList.remove('invert');
        }
        document.querySelector('header').classList.add('scrolled');
    } else {
        if (route.name === 'index') {
            document.querySelector('header').classList.add('invert');
        }
        document.querySelector('header').classList.remove('scrolled');
    }
}

// Watch the route.name, if it changes we change the ref
watch(() => route.name, (name) => {
    headerInverted.value = name === 'index';
    navigationVisible.value = false;
});

/**
 * On component mount
 */
onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});
</script>

<template>
    <header :class="[route.name === 'index' && 'invert', navigationVisible && 'navigation-active']">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="~/assets/img/logo.svg" alt="Logo Upraise Media"/>
                    </NuxtLink>
                </div>
                <nav :class="navigationVisible && 'is-active'" class="navigation">
                    <ul>
                        <li v-for="item in navigationItems" :key="item.name">
                            <NuxtLink
                                :to="item.path"
                                :class="route.name.includes(item.key) && 'active'"
                            >
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="mailto">
                    <span>
                        <Icon name="heroicons:envelope" size="20"/>
                        <strong>Mail:</strong>
                    </span>
                    <NuxtLink to="mailto:info@upraisemedia.nl">
                        info@upraisemedia.nl
                    </NuxtLink>
                </div>
                <button class="hamburger" @click="navigationVisible = !navigationVisible">
                    <IconsHamburger/>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 7rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transition: all .2s;

    @screen xl {
        height: 10.8rem;
    }

    .logo {
        transition: all .3s;

        img {
            height: 3rem;
        }

        @media (hover: hover) {
            &:hover {
                transform: scale(1.05);
            }
        }
    }

    .navigation {
        z-index: 10;
        position: absolute;
        top: 7rem;
        left: 0;
        right: 0;
        background-color: var(--color-white);
        width: 100vw;
        height: calc(100vh - 7rem);
        padding: 4rem 2rem 2rem 2rem;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all .3s;

        @screen lg {
            display: block;
            position: static;
            top: inherit;
            width: auto;
            height: auto;
            padding: 0;
            background-color: transparent;
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 4.8rem;
            list-style: none;
            text-align: center;

            @screen lg {
                flex-direction: row;
                gap: 3.2rem;
            }

            li {
                color: var(--color-primary);
                font-weight: var(--font-weight-medium);
                font-family: var(--font-heading);
                font-size: 2.4rem;

                @screen lg {
                    font-size: 1.6rem;
                }

                a {
                    &.active {
                        text-decoration: underline;
                    }

                    @media (hover: hover) {
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        &.is-active {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
        }
    }

    .mailto {
        display: none;
        font-weight: var(--font-weight-light);
        align-items: center;
        gap: 0.4rem;

        @screen lg {
            display: flex;
        }

        span {
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        strong {
            color: var(--color-primary);
        }
    }

    .hamburger {
        @screen lg {
            display: none;
        }
    }

    &.scrolled {
        background-color: var(--color-white);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 7rem;
    }

    &.navigation-active {
        filter: none!important;
        --tw-invert: none!important;
        background-color: var(--color-white);
        box-shadow: none!important;
    }
}
</style>
