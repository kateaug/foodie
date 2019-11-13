<template>
  <div class="map">
    <GmapMap
    v-bind:center="{lat: 51.512500, lng: -0.127120}"
    v-bind:zoom="14"
    style="width: 100%; height: 500px"
    v-bind:options="mapStyle"
    >
      <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
        v-bind:draggable="true"
        @click="center=m.position"/> 
    </GmapMap>
</div>
</template>


<script>
import {gmapApi} from 'vue2-google-maps';

const mapStyle = [
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-100"
            },
            {
                "color": "#ffdac9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffcab1"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffcab1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#92e1dd"
            }
        ]
    }
    ];

export default {
  name: 'Map',
  computed: {
    google: gmapApi
  },
  data() {
    return {
      mapStyle: {styles: mapStyle},
      markers: [
        {
            name: "House of Aleida Greve",
            description: "description 1",
            date_build: "",
            position: {lat: 51.512500, lng: -0.127120}
        }
      ]

    }
  }


}
</script>

<style scoped>
</style>
