import DS from 'ember-data';

export default DS.Model.extend({
	userID: DS.attr('string'),
	url: DS.attr('string'),

	response: Ember.computed('url',function(){
		return Ember.$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAkmn5sCYpkPY_obNcQfyOF3WLOXBJFkkc&part=snippet&id=VB8mmlfncTE',
			type: 'GET',
		});
	}),
});
