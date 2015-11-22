import Ember from 'ember';

export default Ember.Route.extend({
	// model: function(){
	// 	return this.store.find('video',video);
	// }
	actions: {
		test: function(myPlayer){
			myPlayer.send('refreshCurrentTime');
			console.log(myPlayer.get('currentTime'));
		}
	}
});
