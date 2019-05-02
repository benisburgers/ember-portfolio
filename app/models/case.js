import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  index: DS.attr(),
  first: DS.attr(),
  last: DS.attr(),
  previous: DS.attr(),
  next: DS.attr(),
  learn: DS.attr(),
  different: DS.attr(),
  website: DS.attr(),
  repository: DS.attr()
});
