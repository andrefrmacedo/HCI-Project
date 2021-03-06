import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition) {
		let self=this;
    	
    	this.get("session").fetch().catch(function() {}).then(function(){
    		if(self.get('session.isAuthenticated')){
    			if(transition.targetName==='index'){
    				self.transitionTo('dashboard');	
    			}
    		}
    		else{
    			self.transitionTo('application');
    		}

    	});
  	},


  	actions: {
		signIn: function(provider){
			let self=this;
			this.get("session").open("firebase", { provider: provider}).then(function(){
				self.transitionTo('dashboard');
			});
		},
		signOut: function(){
			this.get("session").close();
		},
	}
});
