import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		scroll: function(){
			Ember.$('html, body').animate({
		        scrollTop: Ember.$("#services").offset().top
		    }, 1000);
		}
	}	
});
