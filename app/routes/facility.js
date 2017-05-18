import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate() {
        this.render('main');
        this.render('facility', {
            into: 'main'
        });
    }

});
