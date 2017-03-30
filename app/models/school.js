import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    email: DS.attr(),
    code: DS.attr(),
    activated: DS.attr()
});
