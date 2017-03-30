import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service('session'),

    schoolStep1: true,
    schoolStep2: false,

    actions: {
        submitPersonal() {

            var self = this;

            let user = this.get('store').createRecord('user', {
                name: this.get('name'),
                username: this.get('username'),
                email: this.get('email'),
                password: this.get('password')
            });

            user.save().then(function() {
                self.get('session').authenticate('authenticator:oauth2', user.get('email'), self.get('password'));
            }).catch(function(error) {
                self.set('errorMessage', error.errors[0].details);
            });

        },

        submitSchool1() {

            var self = this;

            let code = this.get('school-code');

            if(Ember.isEmpty(code)) {
                this.set('schoolErrorMessage1', 'Please enter a school code!');
            } else {

                this.get('store').queryRecord('school', {'code':code}).then(function(school) {
                    self.set('schoolStep1', false);
                    self.set('schoolStep2', true);
                    self.set('school-code2', school.get('code'));
                    self.set('school-name', school.get('name'));
                    self.set('school-email', school.get('email'));
                }).catch(function(error) {
                    self.set('schoolErrorMessage1', error.errors[0].details);
                });

            }

        },

        submitSchool2() {

            var self = this;

            this.get('store').createRecord('user', {
                type: 'school',
                code: this.get('school-code2'),
                password: this.get('school-password')
            }).save().then(function(user) {
                self.get('session').authenticate('authenticator:oauth2', user.get('email'), self.get('school-password'));
            }).catch(function(error) {
                self.set('schoolErrorMessage2', error.errors[0].details);
            });

        }
    }

});
