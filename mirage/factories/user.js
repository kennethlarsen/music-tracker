import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username() {
    return faker.name.firstName()
  }
});
