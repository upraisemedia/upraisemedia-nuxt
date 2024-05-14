<template>
    <HeroDefault>
        <ul>
            <li>
                <NuxtLink to="/">
                    <Icon name="heroicons:arrow-down-right" size="20"/>
                    Home
                </NuxtLink>
            </li>
            <li>
                <span>Over ons</span>
            </li>
        </ul>
        <h1>Over ons</h1>
    </HeroDefault>

    <Logos/>

    <ImageWide
        image="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        hide-pattern
    />

    <AboutInline/>
</template>