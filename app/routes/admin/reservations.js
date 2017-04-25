import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

    titleToken: 'Reservations',

    model() {
        return this.store.query('reservation', {'type': 'current'});
    }

});
