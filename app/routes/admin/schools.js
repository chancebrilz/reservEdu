import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    session: Ember.inject.service(),

    titleToken: 'All Schools',

    renderTemplate() {
        this.render('admin');
        this.render('admin/schools', {
            into: 'admin'
        })
    },

    model() {
        return this.store.findAll('school');
    }

});
