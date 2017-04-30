import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate() {
        this.render('main');
        this.render('school', {
            into: 'main'
        });
    },

    afterModel(model) {
        this.set('titleToken', model.get('name'));
    }

});
