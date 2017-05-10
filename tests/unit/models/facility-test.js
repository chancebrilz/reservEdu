//Tests a model of adding a facility to the system
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('facility', 'Unit | Model | facility', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
