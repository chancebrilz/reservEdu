import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    renderTemplate() {
        this.render('main');
        this.render('profile', {
            into: 'main'
        });
    },

    model(params) {
        return this.store.findRecord('user', params.user_id);
    },

    afterModel(model) {
        this.set('titleToken', model.get('name'));
    }

});
