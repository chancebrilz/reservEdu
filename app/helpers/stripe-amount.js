import Ember from 'ember';

export function stripeAmount(amount) {
    let amt = amount.toString();
    let length = amt.length;
    return "$" + amt.substr(0, length-2) + "." + amt.substring(length-2, length);
}

export default Ember.Helper.helper(stripeAmount);
