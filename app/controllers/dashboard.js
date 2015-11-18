import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		newVideo: function(address){
			var newVid=this.store.createRecord('video',{
				userID: this.get('session.uid'),
				//regex to get the youtube video ID
				youtube: address.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/)[1],
			});
			newVid.save();
		},

		test: function(){
			this.get('model').map(item =>{
				console.log(item.get('response'));
			});
		}
	}
});
