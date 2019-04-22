import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service('current-user'),

  actions: {
    addToCollection(album) {
      console.log(this.get('currentUser'));
    }
  }
});
