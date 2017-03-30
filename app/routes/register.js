import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
    titleToken: 'Register',
    renderTemplate() {
        this.render('main');
        this.render('register', {
            into: 'main'
        });
    },
    afterModel() {
        Ember.$(document).ready(function() {
            Ember.$('.tabs').tabs();
        });
    }
});
