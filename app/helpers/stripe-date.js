import Ember from 'ember';

export function stripeDate(timestamp) {
    let date = new Date(timestamp*1000);
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

export default Ember.Helper.helper(stripeDate);
