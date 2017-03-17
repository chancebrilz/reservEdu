import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service(),

    titleToken: 'Schools - TESTING',

    renderTemplate() {
        this.render('admin');
        this.render('schools', {
            into: 'admin'
        });
    },

    model: function() {
        return this.store.findAll('school');
    },

    afterModel(schools) {
        
    }

});
