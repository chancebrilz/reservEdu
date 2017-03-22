import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Register',
    renderTemplate() {
        this.render('main');
        this.render('register', {
            into: 'main'
        });
    },
    afterModel() {
        $(document).ready(function() {
            $('.tabs').tabs();
        });
    }
});
