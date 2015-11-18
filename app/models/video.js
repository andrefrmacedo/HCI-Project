import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
	userID: DS.attr('string'),
	youtube: DS.attr('string'),

	response: Ember.computed('youtube',function(){
		return Ember.$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/videos?key='+config.youtubeKey+'&part=snippet&id='+this.get('youtube'),
			type: 'GET',
		});
	}),
});
