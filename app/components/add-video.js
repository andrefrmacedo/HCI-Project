import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		addVideo: function(){
			this.sendAction('addVideo',this.get('url'));
			this.setProperties({
				url: '',
			});
		},
	}
});
