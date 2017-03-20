import Ember from 'ember';

export default Ember.Route.extend({

    currentUser: Ember.inject.service('current-user'),

    renderTemplate() {
        this.render('main');
        this.render('profile', {
            into: 'main'
        });
    },

    afterModel() {
        console.log(this.get('currentUser.user'))
    }

});
