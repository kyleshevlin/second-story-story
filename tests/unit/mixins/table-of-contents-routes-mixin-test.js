import Ember from 'ember';
import TableOfContentsRoutesMixinMixin from 'second-story/mixins/table-of-contents-routes-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | table of contents routes mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let TableOfContentsRoutesMixinObject = Ember.Object.extend(TableOfContentsRoutesMixinMixin);
  let subject = TableOfContentsRoutesMixinObject.create();
  assert.ok(subject);
});
