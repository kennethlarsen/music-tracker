import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr(),
  year: attr(),
  label: attr(),
  artist: belongsTo('artist')
});
