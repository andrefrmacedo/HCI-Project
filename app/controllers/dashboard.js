import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		newVideo: function(address){
			
			var newVid=this.store.createRecord('video',{
				userID: this.get('session.uid'),
				url: address,
			});
			newVid.save();
		}
	}
});
