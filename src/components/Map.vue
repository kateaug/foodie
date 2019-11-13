<template>
  <div class="map">
    <gmap-map
    :center="{lat: 51.512500, lng: -0.127120}"
    :zoom="14"
    style="width: 100%; height: 500px"
    :options="mapStyle"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"> 
       </gmap-marker>
    </gmap-map>
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
            position: {lat: 51.512500, lng: -0.127120}
        }
      ]

    }
  }


}
</script>

<style scoped>

 .location {
     width: 30%;
     height: 200px;
 }
</style>
