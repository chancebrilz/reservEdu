import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

    titleToken: 'Payments',

    renderTemplate() {
        this.render('admin');
        this.render('admin/payments', {
            into: 'admin'
        });
    },

    model() {
        return this.store.findAll('payment');
    }

});
