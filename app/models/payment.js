import DS from 'ember-data';

export default DS.Model.extend({
    stripe: DS.attr(),
    amount: DS.attr()
});
