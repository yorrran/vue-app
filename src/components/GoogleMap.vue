<template>
    <div>
        <div>
        <h1>this is google map</h1>
         <gmap-autocomplete :value="description" @place_changed="setPlace" class="input-item">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
        <br/>
        </div>
        <br>
        <gmap-map id="map" :center="center" :zoom="18" class = "gmap">
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="center = m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                center: {lat: 23.8103, lng: 90.4125},
                markers: [
                    {position: {lat: 10.0, lng: 10.0}}
                ],
                getMap: this.$root.mapping,
                description: '',
                latLng: {},
                places: [],
                currentPlace: null
            }
        },

        mounted(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.center.lat = pos.lat;
                    this.center.lng = pos.lng;
                    this.markers[0].position.lat = pos.lat;
                    this.markers[0].position.lng = pos.lng;

                    this.geocodeLatLng(new google.maps.Geocoder, pos, google.maps.InfoWindow);

                }.bind(this));
            }
        },
        methods: {
            setDescription(description){
                this.description = description
            },
            setPlace(place){
                this.currentPlace = place;
            },
            addMarker() {
            if (this.currentPlace) {
                const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng()
            };
             this.markers.push({ position: marker });
             this.places.push(this.currentPlace);
             this.center = marker;
             this.place = null;
            }
          },
           geolocate() {
            navigator.geolocation.getCurrentPosition(position => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        },
        geocodeLatLng(geocoder, map, infowindow){
                geocoder.geocode({'location':this.center}, function(results, status){
                    console.log(results, status); 
                });
            }
        },
    }
</script>

<style>
.gmap{
  width: 800px;
  height: 600px;
  background: gray;
  margin: 0 auto;
}

</style>