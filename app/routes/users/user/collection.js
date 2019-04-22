import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let { user_id } = this.paramsFor('users.user');
    console.log(user_id);
    return this.store.findRecord('user', user_id, { include: 'collection' });
  }
});
