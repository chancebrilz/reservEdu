import Ember from 'ember';

export default Ember.Controller.extend({

    currentLocation: Ember.inject.service(),

    school: null,

    facilities: null

});
