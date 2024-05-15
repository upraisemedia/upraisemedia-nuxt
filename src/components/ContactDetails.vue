<script setup>
let map;

function initMaps() {
    // Initialize Google maps within the #map element
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.035980, lng: 5.071290},
        zoom: 17,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: {lat: 52.035980, lng: 5.071290},
        map: map,
        title: 'Upraise Media',
        animation: google.maps.Animation.DROP,
    });
}

/**
 * On component mounted
 */
onMounted(() => {
    initMaps();
});

</script>

<template>
    <section>
        <div class="container mb-12">
            Een (digitaal) kopje koffie drinken of gewoon even babbelen? <br/> Neem contact met ons op!
        </div>
        <div class="arrow">
            <IconsLongarrowDown/>
        </div>
        <div class="container mb-24">
            <div class="grid gap-16 md:grid-cols-3">
                <div class="details">
                    <h3>Telefoon</h3>
                    <p>
                        We staan je graag te woord.
                    </p>
                    <NuxtLink to="tel:+31631950195">+31631950195</NuxtLink>
                </div>
                <div class="details">
                    <h3>E-mail</h3>
                    <p>
                        Stuur ons een e-mail.
                    </p>
                    <NuxtLink to="mailto:info@upraisemedia.nl">info@upraisemedia.nl</NuxtLink>
                </div>
                <div class="details">
                    <h3>Adres</h3>
                    <p>
                        Kom langs voor een kopje koffie.
                    </p>
                    <NuxtLink to="https://maps.app.goo.gl/6iS4yt9DoJcUaXPE6" target="_blank">
                        Walnootgaarde 38<br/>
                        3436 JA Nieuwegein
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="maps-wrapper">
                <div id="map"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 6rem 0;
    text-align: center;

    @screen lg {
        padding: 8rem 0;
    }

    @screen xl {
        padding: 12rem 0;
    }

    .arrow {
        display: flex;
        justify-content: center;
        margin-bottom: 5rem;
    }

    .details {
        display: flex;
        flex-direction: column;

        a {
            margin-top: 1.6rem;
            font-family: var(--font-heading);

            @screen lg {
                font-size: 2rem;
                color: var(--color-primary);
            }

            @media (hover: hover) {
                &:hover {
                    text-decoration: underline !important;
                }
            }
        }
    }

    .maps-wrapper {
        position: relative;

        #map {
            width: 100%;
            height: 35rem;

            @screen lg {
                height: 52rem;
            }
        }
    }
}
</style>
