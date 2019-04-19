import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | artists/artist/albums', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:artists/artist/albums');
    assert.ok(route);
  });
});
