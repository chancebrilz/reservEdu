import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    renderTemplate() {
        this.titleToken = this.get('currentUser.user.name');
        this.render('main');
        this.render('profile', {
            into: 'main'
        });
    }

});
