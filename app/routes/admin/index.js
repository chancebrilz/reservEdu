import Ember from 'ember';
import AdminRouteMixin from 'reservedu/mixins/admin-route-mixin';

export default Ember.Route.extend(AdminRouteMixin, {

    titleToken: 'School Admin',

    renderTemplate() {
        this.render('admin');
        this.render('admin/index', {
            into: 'admin'
        });
    }
});
