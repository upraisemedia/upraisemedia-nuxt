<script setup>
const route = useRoute();

const navigationVisible = ref(false);

/**
 * Toggle the navigation visibility
 */
function checkScroll() {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.remove('invert');
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.add('invert');
        document.querySelector('header').classList.remove('scrolled');
    }
}

/**
 * On component mount
 */
onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});
</script>

<template>
    <header :class="route.name === 'index' && 'invert'">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="~/assets/img/logo.svg" alt="Logo Upraise Media"/>
                    </NuxtLink>
                </div>
                <nav :class="navigationVisible && 'is-active'" class="navigation">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Over ons</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Ons werk</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Diensten</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Contact</NuxtLink>
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
                <div class="hamburger">
                    <IconsHamburger/>
                </div>
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
        img {
            height: 3rem;
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
        display: none;

        @screen lg {
            display: block;
            position: static;
            top: inherit;
            width: auto;
            height: auto;
            padding: 0;
            background-color: transparent;
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
                    @media (hover:hover) {
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
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
}
</style>