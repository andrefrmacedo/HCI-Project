import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition) {
		let self=this;
    	
    	this.get("session").fetch()
    	.catch(function() {})
    	.then(function(){
    		if(self.get('session.isAuthenticated') && transition.targetName==='index'){
    			self.transitionTo('dashboard');	
    		}	
    	});
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
