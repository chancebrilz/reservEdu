import Ember from 'ember';

export default Ember.Service.extend({


    locationFinder: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD-NAhgdqywR6IvYb4ZE0cJVhLIIh6T0nk",
    addressFinder: "https://maps.googleapis.com/maps/api/geocode/json",

    load() {
        var self = this;
        return Ember.$.post(this.get('locationFinder'), function(data) {
            self.set('location', data.location);
            Ember.$.get(self.get("addressFinder"),
                {'latlng': data.location.lat + "," + data.location.lng}).done(function(address) {
                    self.set('address', address.results[0].formatted_address);
                });
        });
    }
});
