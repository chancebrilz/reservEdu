import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    title: function(tokens) {
        return tokens.join(' - ') + ' - reservEdu';
    }
});
