//Tests a model of making a payment to the system
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment', 'Unit | Model | payment', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
