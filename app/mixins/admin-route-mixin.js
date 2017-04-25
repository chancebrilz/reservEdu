import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Mixin.create(AuthenticatedRouteMixin, {

    currentUser: Ember.inject.service('current-user'),

    beforeModel() {
         this._super(...arguments);
         if(this.get('currentUser.user.meta.permissions.admin') !== true) {
             this.transitionTo('index');
         }
    }

});
