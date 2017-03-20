import Ember from 'ember';

export default Ember.Controller.extend({

    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    },

    session: Ember.inject.service('session'),

    beforeModel() {
        return this._loadCurrentUser();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    _loadCurrentUser() {
        return this.get('currentUser').load().catch(() => this.get('session').invalidate());
    },

    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }

});
