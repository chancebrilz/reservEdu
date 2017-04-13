import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    school_id: DS.attr(),
    school: DS.attr(),
    meta: DS.attr()
});
