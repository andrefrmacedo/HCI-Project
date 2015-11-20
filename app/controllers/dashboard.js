import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

	actions: {
		newVideo: function(address){
			var self=this;
			//regex to get the youtube video ID
			let youtubeID=address.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/)[1];

			return Ember.$.ajax({
				url: 'https://www.googleapis.com/youtube/v3/videos?key='+config.youtubeKey+'&part=snippet&id='+youtubeID,
				type: 'GET',

			}).then(function(data){
				
				let myData={
					id: data['items'][0]['id'],
					title: data['items'][0]['snippet']['title'],
					description: data['items'][0]['snippet']['description'],
					thumbnails: data['items'][0]['snippet']['thumbnails'],
					channelId: data['items'][0]['snippet']['channelId'],
					channelTitle: data['items'][0]['snippet']['channelTitle'],
					publishedAt: data['items'][0]['snippet']['publishedAt'],
				};

				let newVid=self.store.createRecord('video',{
					userID: self.get('session.uid'),
					youtube: myData,
				});

				newVid.save();
			});
		},
	}
});
