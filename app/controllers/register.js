import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service('session'),

    actions: {
        submit() {

            var self = this;

            let user = this.get('store').createRecord('user', {
                name: this.get('name'),
                username: this.get('username'),
                email: this.get('email'),
                password: this.get('password')
            });

            user.save().then(function() {
                //authenticate
            }).catch(function(reason) {
                self.set('errorMessage', reason.errors[0].details);
            });

        },

        submitSchool() {
            console.log('submitted');
        }
    }

});
