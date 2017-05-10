//Tests that the amount from stripe is accurate when payment us going through
import { stripeAmount } from 'reservedu/helpers/stripe-amount';
import { module, test } from 'qunit';

module('Unit | Helper | stripe amount');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = stripeAmount([42]);
  assert.ok(result);
});

