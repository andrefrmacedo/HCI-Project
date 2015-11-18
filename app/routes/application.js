import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
    	this.get("session").fetch().catch(function() {});
    	this.transitionTo('dashboard');
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