import DS from 'ember-data';

export default DS.Model.extend({
	userID: DS.attr('string'),
	url: DS.attr('string'),
});
