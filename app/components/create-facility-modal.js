import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service('store'),

    per: null,

    init() {
        this._super(...arguments);
        this.set('facilityData', Ember.Object.create());
    },

    actions: {

        updatePer(value) {
            this.set('facilityData.per', value);
        },

        submit() {

            var self = this;
            var facilityData = this.get('facilityData');

            let facility = this.get('store').createRecord('facility', {
                name: facilityData.name,
                meta: {
                    description: facilityData.description,
                    price: {
                        amount: facilityData.price,
                        per: facilityData.per
                    },
                    availability: {
                        starting_date: facilityData.starting_date,
                        ending_date: facilityData.ending_date,
                        starting_time: facilityData.starting_time,
                        ending_time: facilityData.ending_time
                    }
                }
            });

            facility.save().then(function(facility) {
                Ember.$('#create-facility-modal').modal('close');
                self.set('facilityData', Ember.Object.create());
            }).catch(function(error) {
                self.set('errorMessage', error.errors[0].details);
                facility.destroyRecord();
            });


        }

    },

    didRender() {
        Ember.$(document).ready(function() {
            Ember.$('#create-facility-modal').modal();
            Ember.$('select').material_select();
            Ember.$('.timepicker').pickatime({
                container: 'body',
                autoclose: true,
                interval: 15
            });
            Ember.$('.datepicker').pickadate({
                container: 'body',
                format: 'mmmm dd, yyyy',
                onSet: function() {
                    this.close();
                }
            });
        });
    }

});
