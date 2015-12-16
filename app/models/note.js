import DS from 'ember-data';

export default DS.Model.extend({
  	video: DS.belongsTo('video'),
  	keyword: DS.attr('string'),
  	timestamp: DS.attr('string'),
  	time: DS.attr('string'),
  	description: DS.attr('string'),
});
