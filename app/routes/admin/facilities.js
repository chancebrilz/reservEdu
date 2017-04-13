import Ember from 'ember';

export default Ember.Route.extend({

    titleToken: 'Facilities',

    renderTemplate() {
        this.render('admin');
        this.render('admin/facilities', {
            into: 'admin'
        });
    },

    model() {
        return this.store.findAll('facility');
    }

});
