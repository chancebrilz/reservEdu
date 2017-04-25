import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

    currentUser: Ember.inject.service('current-user'),
    currentLocation: Ember.inject.service('current-location'),

    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    },

    beforeModel() {
        this._loadCurrentUser();
        this._loadCurrentLocation();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    _loadCurrentUser() {
        return this.get('currentUser').load().catch(() => this.get('session').invalidate());
    },

    _loadCurrentLocation() {
        return this.get('currentLocation').load();
    }

});
