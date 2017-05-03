import Ember from 'ember';

export default Ember.Controller.extend({

    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    },

    session: Ember.inject.service(),

    currentUser: Ember.inject.service(),

    schoolStep1: true,

    schoolStep2: false,

    actions: {

        invalidateSession() {
            this.get('session').invalidate();
        }

    }

});
