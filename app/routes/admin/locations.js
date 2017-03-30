import Ember from 'ember';

export default Ember.Route.extend({

    titleToken: 'Your Locations',

    renderTemplate() {
        this.render('admin');
        this.render('admin/locations', {
            into: 'admin'
        });
    },

    model() {
        return this.store.findAll('location');
    }

});
