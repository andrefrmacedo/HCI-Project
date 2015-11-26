import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		test: function(myPlayer){
			myPlayer.send('refreshCurrentTime');
			console.log(myPlayer.get('currentTime'));
		}
	}
});
