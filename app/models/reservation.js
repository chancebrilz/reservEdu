import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    facility_id: DS.attr(),
    user_id: DS.attr(),
    facility: DS.attr(),
    user: DS.attr(),
    start_time: DS.attr(),
    end_time: DS.attr(),
    payment: DS.attr()
});
