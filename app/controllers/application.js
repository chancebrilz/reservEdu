import Ember from 'ember';

export default Ember.Controller.extend({

    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    },

    session: Ember.inject.service('session'),

    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }

});
