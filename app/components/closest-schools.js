import Ember from 'ember';

export default Ember.Component.extend({

    currentLocation: Ember.inject.service(),

    store: Ember.inject.service('store'),

    gotLocations: false,

    didRender() {

        if(this.get('gotLocations') === false) {
            if(typeof this.get('currentLocation.location.lat') !== undefined) {
                var self = this;
                this.get('store').query('school', {
                    'closest': true,
                    'lat': this.get('currentLocation.location.lat'),
                    'lng': this.get('currentLocation.location.lng')
                }).then(function(schools) {
                    self.set('schools', schools);
                    if(schools.get('length') > 0) {
                        self.set('gotLocations', true);
                    }
                });
            }
        }
    }

});
