import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  image: DS.attr(),
  largeimage: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  text: DS.attr()
});
