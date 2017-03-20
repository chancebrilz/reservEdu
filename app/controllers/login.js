import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service('session'),

    currentUser: Ember.inject.service('current-user'),

    actions: {
        authenticate() {
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
                Ember.$('#password').val("");
                this.set('errorMessage', reason.error_message || reason.error || reason);
            });
        }
    }

});
