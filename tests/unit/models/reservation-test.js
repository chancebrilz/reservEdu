//Tests a model of the reservation system
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reservation', 'Unit | Model | reservation', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
