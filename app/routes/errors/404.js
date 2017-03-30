import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate() {
        this.render('main');
        this.render('errors/404', {
            into: 'main'
        });
    }
});
