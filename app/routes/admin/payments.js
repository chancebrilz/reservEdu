import Ember from 'ember';

export default Ember.Route.extend({

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
