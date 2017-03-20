import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

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
