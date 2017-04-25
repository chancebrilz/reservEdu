import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

    titleToken: 'Facilities',

    renderTemplate() {
        this.render('admin');
        this.render('admin/facilities', {
            into: 'admin'
        });
    },

    model() {
        return this.store.findAll('facility').catch(function() {
            return null;
        });
    }

});
