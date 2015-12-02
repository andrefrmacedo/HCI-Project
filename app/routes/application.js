import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition) {
		let self=this;
    	this.get("session").fetch().catch(function() {
    		//self.transitionTo('application');
    		console.log('here');
    	});
    	
    	if(transition.targetName==='index'){
    		this.transitionTo('dashboard');
    	}
  	},

  	actions: {
		signIn: function(provider){
			this.get("session").open("firebase", { provider: provider});
		},
		signOut: function(){
			this.get("session").close();
		},
	}
});
