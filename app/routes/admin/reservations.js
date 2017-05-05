import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

    titleToken: 'Reservations',

    currentUser: Ember.inject.service(),

    model() {
        return this.store.findAll('reservation');
    }

});
