import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

    currentUser: Ember.inject.service('current-user'),

    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    },

    beforeModel() {
        return this._loadCurrentUser();
    },

    _loadCurrentUser() {
        return this.get('currentUser').load().catch(() => this.get('session').invalidate());
    }

});
