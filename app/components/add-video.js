import Ember from 'ember';

export default Ember.Component.extend({
	drop: true,

	actions: {
		addVideo: function(){
			this.sendAction('addVideo',this.get('url'));
			this.setProperties({
				url: '',
			});
		},
		
		/*toggleDrop: function(){
			this.toggleProperty('drop');
		}*/
	}
});
