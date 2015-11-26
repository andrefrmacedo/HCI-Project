import DS from 'ember-data';

export default DS.Model.extend({
  	video: DS.belongsTo('video'),
  	description: DS.attr('string'),
});
