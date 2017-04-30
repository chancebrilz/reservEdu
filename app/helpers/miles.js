import Ember from 'ember';

export function miles(miles) {
    return Math.round(miles*Math.pow(10,2))/Math.pow(10,2);
}

export default Ember.Helper.helper(miles);
