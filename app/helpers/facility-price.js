import Ember from 'ember';

export function facilityPrice(price) {
    return "$" + price[0].amount + "/" + price[0].per;
}

export default Ember.Helper.helper(facilityPrice);
