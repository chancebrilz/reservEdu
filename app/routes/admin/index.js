import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    titleToken: 'School Admin',

    renderTemplate() {
        this.render('admin');
        this.render('admin/index', {
            into: 'admin'
        });
    }
});
