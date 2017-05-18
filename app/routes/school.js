import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate() {
        this.render('main');
        this.render('school', {
            into: 'main'
        });

    },

    model(params) {
        return Ember.RSVP.hash({
            school: this.store.findRecord('school', params.school_id),
            facilities: this.store.query('facility', { school_id: params.school_id })
        });
    },

    setupController(controller, model) {
        this._super(controller, model);
        Ember.set(controller, 'school', model.school);
        Ember.set(controller, 'facilities', model.facilities);
    },

    afterModel(model) {

        this.set('titleToken', model.school.get('name'));

        Ember.$(document).ready(function() {

            var uluru = {
                lat: model.school.get('lat'),
                lng: model.school.get('lng')
            };

            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 14,
              center: uluru
            });

            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
        });

    }

});
