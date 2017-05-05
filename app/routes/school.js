import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate() {
        this.render('main');
        this.render('school', {
            into: 'main'
        });
    },

    afterModel(model) {
        this.set('titleToken', model.get('name'));

        Ember.$(document).ready(function() {
            var uluru = {
                lat: model.get('lat'),
                lng: model.get('lng')
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
