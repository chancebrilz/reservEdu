import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service('session'),

    titleToken: 'Home',

    renderTemplate() {
        this.render('main');
        if(this.get('session.isAuthenticated')) {
            this.render('index', {
                into: 'main'
            });
        } else {
            this.render('welcome', {
                into: 'main'
            });
        }
    }

});
