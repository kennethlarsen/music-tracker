import DS from 'ember-data';
const { Model, hasMany, belongsTo } = DS;

export default Model.extend({
  albums: hasMany('album'),
  user: belongsTo('user')
});
