//Admin test for mixin
import Ember from 'ember';
import AdminRouteMixinMixin from 'reservedu/mixins/admin-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | admin route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let AdminRouteMixinObject = Ember.Object.extend(AdminRouteMixinMixin);
  let subject = AdminRouteMixinObject.create();
  assert.ok(subject);
});
