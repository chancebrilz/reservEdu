import Ember from 'ember';

export default Ember.Component.extend({

    session: Ember.inject.service(),

    currentUser: Ember.inject.service(),

    store: Ember.inject.service(),

    schoolStep1: true,

    schoolStep2: false,

    _authFinish() {
        Ember.$('#login-form').modal('close');
        Ember.$('#register-form').modal('close');
    },

    actions: {

        invalidateSession() {
            this.get('session').invalidate();
        },

        loginModal() {
            this.set('loginData', Ember.Object.create());
            Ember.$('#login-form').modal('open');
        },

        registerModal() {
            this.set('registerPersonalData', Ember.Object.create());
            this.set('registerSchoolData', Ember.Object.create());
            Ember.$('#register-form').modal('open');
        },

        authenticate() {
            var self = this;
            let { identification, password } = this.get('loginData');
            this.get('session').authenticate('authenticator:oauth2', identification, password).then(self._authFinish).catch((reason) => {
                this.set('errorMessage', reason.error_message || reason.error || reason);
            });
        },

        registerPersonal() {

            var self = this;
            var data = this.get("registerPersonalData");

            let user = this.get('store').createRecord('user', {
                name: data.name,
                username: data.username,
                email: data.email,
                password: data.password
            });

            user.save().then(function() {
                self.get('session').authenticate('authenticator:oauth2', user.get('email'), data.password).then(self._authFinish);
            }).catch(function(error) {
                self.set('registerPersonalError', error.errors[0].details);
            });

        },

        registerSchool1() {

            var self = this;

            var data = this.get('registerSchoolData');

            let code = data.code;

            if(Ember.isEmpty(code)) {
                this.set('registerSchoolError1', 'Please enter a school code!');
            } else {

                this.get('store').queryRecord('school', {'code':code}).then(function(school) {
                    self.set('schoolStep1', false);
                    self.set('schoolStep2', true);
                    data.code2 = school.get('code');
                    data.name = school.get('name');
                    data.email = school.get('email');
                }).catch(function(error) {
                    self.set('registerSchoolError1', error.errors[0].details);
                });

            }

        },

        registerSchool2() {

            var self = this;
            var data = this.get('registerSchoolData');

            this.get('store').createRecord('user', {
                type: 'school',
                code: data.code2,
                password: data.password
            }).save().then(function(user) {
                self.get('session').authenticate('authenticator:oauth2', user.get('email'), data.password).then(self._authFinish);
            }).catch(function(error) {
                self.set('registerSchoolError2', error.errors[0].details);
            });

        }

    },

    didRender() {
        Ember.$(document).ready(function() {
            Ember.$('#login-form').modal();
            Ember.$('#register-form').modal();
            Ember.$(".tabs").tabs();
        });
    }

});
