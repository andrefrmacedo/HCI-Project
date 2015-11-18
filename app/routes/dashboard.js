import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.query('video',{orderBy: 'userID', equalsTo: this.get('session.uid')});
	},

	/*afterModel: function(videos, transition){
		videos.map(item=>{
			console.log(item.get('response.items'));
		});
	}*/
});
